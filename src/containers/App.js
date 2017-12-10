import React, { Component } from 'react';
import Playlist from './playlist/playlist';
import './App.css';
import '../buttons.css'

class App extends Component {
  render() {
    return (
      <div>
        <Playlist />
      </div>
    );
  }
}

export default App;
