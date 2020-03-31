//import React, {Component} from 'react';
///import Switch from "react-switch";
import React, { Component } from "react";
import  ReactDOM from  "react-dom";
import axios from 'axios';
import './converter.css'
// import logo from './logo.svg';
// import './App.css';


class Converter extends Component {
  state  = {
    result: null,
    fromCurrency: 'USD',
    toCurrency: 'GBP',
    amount: 1,
    currencies: [],
  };

  componentDidMount() {
    axios
      .get("http://api.openrates.io/latest")
      .then(response => {
        const currencyAr = ["EUR"]
        for (const key  in response.data.rates) {
          currencyAr.push(key)
        }
        this.setState({ currencies: currencyAr.sort() })
              })
              .catch(err => {
                console.log("Opps", err.message);
              });
      }
      

  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(`http://api.openrates.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
        .then(response => {
          const result = this.state.amount * (response.data.rates[this.state.toCurrency]);
          this.setState({ result: result.toFixed(5) })
        })
          .catch(err  => {
            console.log("Opps", err.message);
          });
    } else {
      this.setState({ result: "You cant convert the same currency"})
    }
  };

  selectHandler = (event) => {
    if (event.target.name === "from"){
      this.setState({ fromCurrency: event.target.value})
    }
    if (event.target.name === "to") {
      this.setState({ toCurrency: event.target.value})
    }
  }

  render() {
    return (
      <div className="Converter">
        <h2>
          <span>
            Currency
          </span>
        </h2>
          Converter 
          <span role="img" aria-label="money"> &#x1f4b5; </span>

          <div className = "Form">
            <input
            name= "amount"
            type="text"
            value={this.state.amount}
            onChange={event =>
             this.setState({ amount: event.target.value})}
            ></input>

            <select
              name="from"
              onChange={(event) => this.selectHandler(event)}
              value={this.state.fromCurrency}
            >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
            </select>
            <select
              name="to"
              onChange={(event) => this.selectHandler(event)}
              value={this.state.toCurrency}
              >
                {this.state.currencies.map(cur => (
                  <option key={cur}>{cur}</option>
                ))}
              </select>
              <button onClick={this.convertHandler}>  Convert</button>
          </div>
          {this.state.result && 
          <h3>{this.state.result}</h3>
          }
      </div>
    );

  }
}


export default Converter;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }










// class SwitchExample extends Component {
//   constructor() {
//     super();
//     this.state = { checked: false };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(checked) {
//     this.setState({ checked });
//   }

//   render() {
//     return (
//     <div className="App">
//     <label>
//         <span>Switch with default style</span>
//         <Switch onChange={this.handleChange} checked={this.state.checked} />
//       </label>

    
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <label>
//           <span>Switch with default style</span>
//           <Switch onChange={this.handleChange} checked={this.state.checked} />
//           </label>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

//   }
// }
// export default SwitchExample;