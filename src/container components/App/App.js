import React, { Component } from 'react';
import './App.css';
import Display from '../../presentational components/Display'

class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="App">
        <Display id="display" />
      </div>
    )
  }
}

export default App;
