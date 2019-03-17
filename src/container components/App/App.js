import React, { Component } from 'react'
import './App.scss'
import Display from '../../presentational components/Display/Display'


const data = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav' },
]

class Pad extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = event => {
    if(event.keyCode === this.props.letter.charCodeAt()) {
      this.handleClick()
    }
  }

  handleClick = () => {
    this.audio.play()
    this.props.handleDisplay(this.props.id)
    this.audio.currentTime = 0
  }

  render() {
    return (
      <button id={this.props.id} className="drum-pad" onClick={this.handleClick}>
        {this.props.letter}
        <audio
          ref={ref => this.audio=ref}
          id={this.props.letter}
          className="clip"
          src={this.props.sound}>
        </audio>
      </button>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "Press or click a key!"
    }
  }

  handleDisplay = display => {
    this.setState({
      display
    })
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <Display display={this.state.display}/>
        </div>
        <div id="drum-pads">
          {data.map(data => (
            <Pad
              handleDisplay={this.handleDisplay}
              id={data.id}
              letter={data.letter}
              sound={data.src}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App