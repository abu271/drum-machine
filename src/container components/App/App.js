import React, { Component } from 'react';
import './App.css';
import Display from '../../presentational components/Display/Display'
import Pad from '../../presentational components/Pad/Pad'

class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="App">
        <div id="display">
          <Display />
        </div>
        <Pad className="drum-pad" />
        <Pad className="drum-pad" />
        <Pad className="drum-pad" />
        <Pad className="drum-pad" />
        <Pad className="drum-pad" />
        <Pad className="drum-pad" />
        <Pad className="drum-pad" />
        <Pad className="drum-pad" />
        <Pad className="drum-pad" />
      </div>
    )
  }
}

export default App;
