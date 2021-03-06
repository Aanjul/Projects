import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';



class App extends React.Component {
   //React says we have to define render!!
//    constructor(props){
//     super(props);
// THIS IS THE ONLY TIME we do  direct assignment 
//to this.state
// this.state ={lat: null, errorMessage:'' };    
// }

state = {lat: null, errorMessage:''};

componentDidMount (){

     console.log(" Component Did Mount ")

     window.navigator.geolocation.getCurrentPosition(
           position =>this.setState({lat: position.coords.latitude }),
           err =>this.setState({errorMessage: err.message})
           
       );
}


    render (){
        
        if (this.state.errorMessage && !this.state.lat){
            return <div> Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return<div> Loading !</div>;
    }
}

        ReactDOM.render( 
        <App/>,
        document.querySelector('#root'))





        // const App = () =>{

//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position),
//         err => console.log(err)
//     );
// return <div>
//     Latitude: 
// </div>;
// };