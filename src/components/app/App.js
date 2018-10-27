import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components and styles
import Nav from '../nav/nav';
import './App.css';
import { getNumberOfFilmsInWatchList } from '../../selectors';

// Containers
const Playlist = lazy(() => import('../../containers/playlist/playlist'));
const WatchList = lazy(() => import('../../containers/watchlist/watchlist'));
const Searchlist = lazy(() => import('../../containers/searchlist/searchlist'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Redirect exact from="/" to="/films" />
              {AppRoutes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numberOfFilms: getNumberOfFilmsInWatchList(state)
});


export default withRouter(connect(mapStateToProps, null)(App));
