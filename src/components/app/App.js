import React, { Component } from 'react';
import Playlist from '../../containers/playlist/playlist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Playlist />
      </div>
    );
  }
}

export default App;
