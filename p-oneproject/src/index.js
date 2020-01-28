// Import the react and React-DOM libraries
import React from  'react';
import ReactDOM from 'react-dom';

// function getButtonText(){
//     return  'Click on me !'; 
// }

// Create react Component

// const App = function (){
const App = () => {

    const buttonText = {text: 'clickme!'};
    const labelText = 'Enter name:';
    
    
    return (
     <div>
        <label className="label" htmlFor="name">
         {labelText}
        </label>
        <input id="name" type="type" />
        <button style={{ backgroundColor:'blue', color:'white'}}> 
        {buttonText.text}
            {/* {getButtonText()} */}
        </button>
    </div>
    );
};

// Take the react component show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
