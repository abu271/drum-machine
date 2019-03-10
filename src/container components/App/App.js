import React, { Component } from 'react';
import './App.css';
import Display from '../../presentational components/Display/Display'
import Pad from '../../presentational components/Pad/Pad'

// state should contain and sound URL and sound name for the "display" component
const data = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => this.state.clap.play()

  render() {
    return (
      <div id="drum-machine" className="App">
        <div id="display">
          <Display />
        </div>
        <Pad sound="1" letter={"Q"} onClick={this.handleClick}>
        </Pad>
        <Pad sound="2" letter={"W"}>
        </Pad>
        <Pad sound="3" letter={"E"}>
        </Pad>
        <Pad sound="4" letter={"A"}>
        </Pad>
        <Pad sound="5" letter={"S"}>
        </Pad>
        <Pad sound="6" letter={"D"}>
        </Pad>
        <Pad sound="7" letter={"Z"}>
        </Pad>
        <Pad sound="8" letter={"X"}>
        </Pad>
        <Pad sound="9" letter={"C"}>
        </Pad>
      </div>
    )
  }
}

export default App;
