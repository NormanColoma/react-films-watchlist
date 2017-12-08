import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilmPlaylist from  './playlist';
import WatchList from './watchlist';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';


ReactDOM.render((
    <Router>
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Funny Playlist</h1>
                <ul className="navlist">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/watchlist">WatchList</NavLink></li>
                </ul>
            </header>
            <Route exact path='/' component={App} />
            <Route path='/playlist' component={App} />
            <Route path='/watchlist' component={WatchList} />
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
