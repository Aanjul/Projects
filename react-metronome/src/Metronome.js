import React, { Component } from 'react';
import './Metronome.css'
import click1 from './click1.wav'
import click2 from './click2.wav'

class Metronome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 0,
            beatsPerMeasure: 4
        }

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }

    startStop = () => {
        if (this.state.playing){
            clearInterval(this.timer);
            this.setState({
                playing : false
            });
        } else {
            this.timer = setInterval(
                this.playClick,
                (60 / this.state.bpm) * 1000
            ) ;
        }
        this.setState({
            count: 0,
            playing: true
        },
        this.playClick
        );
    }

    playClick = () => {
        const { count, beatsPerMeasure } = this.state;

        if ( count % beatsPerMeasure )
    }
    handleBpmChange = event => {
        const bpm =event.target.value
        this.setState({ bpm });
    }
    render() {
        const { playing, bpm } = this.state;
        // let bpm = 100;
        // let playing = false;

        return (
            <div className= "metronome">
            <div className="bpm-slider">
            <div>{bpm} BPM</div>
            <input type="range" 
            min="60"
            max="240"
            value={bpm}
            onChange= {this.handleBpmChange} />
            </div>
            <button
            onClick={this.startStop}>{playing ? 'Stop' : 'Start'}</button>
            </div>
        );
    }
}


export default Metronome;