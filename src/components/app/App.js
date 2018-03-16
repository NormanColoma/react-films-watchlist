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

const AppRoutes = [
  {
    path: '/films/genre/:filter',
    component: Playlist
  },
  {
    path: '/films',
    component: Playlist
  },
  {
    path: '/watchlist',
    component: WatchList
  },
  {
    path: '/search',
    component: Searchlist
  }
];

class App extends Component {
  render() {
    const { numberOfFilms } = this.props;

    return (
      <div className="App">
        <div className="App-container">
          <Nav numberOfFilms={numberOfFilms}/>
          <Switch>
            <Redirect exact from="/" to="/films" />
            {AppRoutes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
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
