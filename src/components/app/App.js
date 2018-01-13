import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Playlist from '../../containers/playlist/playlist';
import WatchList from '../../containers/watchlist/watchlist';
import Nav from '../nav/nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/films" />
            <Route path='/films/genre/:filter' component={Playlist} />
            <Route path='/films' component={Playlist} />
            <Route path='/watchlist' component={WatchList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
