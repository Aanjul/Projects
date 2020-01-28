import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

class Test extends React.Component {
  constructor (props)
  {
    super(props);
    this.state = {hello : "World!"};
  }
  componentWillMount()
  {
    console.log("componentWillMount()");
  }
  componentDidMount()
  {
    console.log("componentDidMount()");
  }
  changeState()
{
  this.setState({ hello : "Geek!"});
}  
render()
{
  return(
    <div>
      <h1>Productive Culture, Hello{this.state.hello}</h1>
      <h2> 
      <a onClick={this.changeState.bind(this)}> Press Here Here !</a>
      </h2>
    </div>
  );

  
}
shouldComponentUpdate(nextState, nextProps)
{
  console.log("shouldComponentUpdate()");
  return true;
}

componentWillUpdate()
{
  console.log("ComponentWillUpdate()")
}

componentDidUpdate(){
  console.log("componentDidUpdate()");
}

}

ReactDOM.render(
  <Test />,
document.getElementById('root')); 



export default Test;