import React from 'react';
import ReactDOM from 'react-dom';

//Parent Component
class Parent extends React.Component{
    render() {
        return(
            <div>
                <h2> You are inside Parent Component</h2>
                <Child name="User" userId = "5555"/>
            </div>
        );
    }
}


//Child Component

class  Child extends React.Component{
    render () {
        return(
            <div>
                <h2> Hello, {this.props.name} </h2>
                <h3> You are inside Child Component </h3>
                <h3> Your user id is: </h3>
            </div>
        );
    }
}

ReactDOM.render(
    <Parent/>,document.getElementById("root")
);
