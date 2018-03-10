import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Playlist from '../../containers/playlist/playlist';
import WatchList from '../../containers/watchlist/watchlist';
import Searchlist from '../../containers/searchlist/searchlist';
import Nav from '../nav/nav';

import { authenticateUser, checkAuthentication } from '../../actions/async';
import { isAuthenticated, checkingAuthentication, getAuthenticatedUser } from '../../selectors';
import type { State } from '../../reducers/user';

import './App.css';

class App extends Component {

  componentDidMount() {
    const { isUserAuthenticated } = this.props;
    isUserAuthenticated();
  }

  render() {
    const { authenticated, loading, user } = this.props;
  
    return (
      <div className="App">
        <div className="App-container">
          <Nav onClickAuth = {() => this.handleAuth()} authenticated={authenticated} loading={loading} user={user}/>
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

const mapStateToProps = (state: State) => ({
  authenticated: isAuthenticated(state),
  loading: checkingAuthentication(state),
  user: getAuthenticatedUser(state)
});

const mapDispatchToProps = (dispatch: Function) => ({
  fireAuth: () => {
      dispatch(authenticateUser());
  },
  isUserAuthenticated: () => {
    dispatch(checkAuthentication());
  }
});



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
