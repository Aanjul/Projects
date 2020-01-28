import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
const FloatPage = () => {
    return (

        <view
            style={{
                flexDirection: 'row',
                height: 100,
                padding:  20,
            }}>
                <view
                    style={{
                        backgroundColor: 'blue', flex: 0.3
                    }}/>

                    <view style={{backgroundColor: 'red', flex: 0.5}} />
                    <text>Gems</text>
            </view>
        //     <p className= "float-left">
        //         Float  left on all viewports
        //         <h1>Left</h1>
                
        //     </p>
        //     <p className= "float-right">
        //         Float  right on all viewports
        //     </p>
        //     <p className= "float-none">
        //         Float  none on all viewports
        //     </p>
           
        // </div>
    )

}

export default FloatPage;
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
