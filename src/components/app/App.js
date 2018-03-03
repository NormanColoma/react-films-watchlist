import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Playlist from '../../containers/playlist/playlist';
import WatchList from '../../containers/watchlist/watchlist';
import Searchlist from '../../containers/searchlist/searchlist';
import Nav from '../nav/nav';

import { authenticateUser } from '../../actions/async';

import './App.css';

class App extends Component {
  render() {
    

    return (
      <div className="App">
        <div className="App-container">
          <Nav onClickAuth = {() => this.handleAuth()} />
          <Switch>
            <Redirect exact from="/" to="/films" />
            <Route path='/films/genre/:filter' component={Playlist} />
            <Route path='/films' component={Playlist} />
            <Route path='/watchlist' component={WatchList} />
            <Route path='/search' component={Searchlist} />
          </Switch>
        </div>
      </div>
    );
  }

  handleAuth() {
    const { fireAuth } = this.props;
    fireAuth();
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  fireAuth: () => {
      dispatch(authenticateUser());
  }
});



export default connect(null,mapDispatchToProps)(App);
