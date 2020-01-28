// 1//  import React, {Component} from 'react';
//1// import Switch from "react-switch"
import React from "react";
import  ReactDOM from  "react-dom";
import Cover  from 'react-video-cover';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
   const videoOptions = {
     src: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
     autoPlay: true,
     muted: true,
     loop: true,
  };
  return (
  <div>This is react
    <div style={{
      width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
    }}>
     <Cover
            videoOptions={videoOptions}
            remeasureOnWindowResize
      />
    </div>
  </div>);

};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);





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


export default App;








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