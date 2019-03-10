import React, { Component } from 'react';
import './App.css';
import Display from '../../presentational components/Display/Display'
import Pad from '../../presentational components/Pad/Pad'

// petercr drum machine (FOR HELP)
// state should contain and sound URL and sound name for the "display" component

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
