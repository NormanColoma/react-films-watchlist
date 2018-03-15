import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Containers
import Playlist from '../../containers/playlist/playlist';
import WatchList from '../../containers/watchlist/watchlist';
import Searchlist from '../../containers/searchlist/searchlist';

// Components and styles
import Nav from '../nav/nav';
import './App.css';
import { getNumberOfFilmsInWatchList } from '../../selectors';

class App extends Component {
  render() {
    const { numberOfFilms } = this.props;

    return (
      <div className="App">
        <div className="App-container">
          <Nav numberOfFilms={numberOfFilms}/>
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
}

const mapStateToProps = (state) => ({
  numberOfFilms: getNumberOfFilmsInWatchList(state)
});


export default withRouter(connect(mapStateToProps, null)(App));
