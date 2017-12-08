import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import FilmPlaylist from  './components/playlist/playlist';
import WatchList from './components/watchlist/watchlist';
import Nav from './components/nav/nav';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render((
    <Router>
        <div className="App">
            <Nav />
            <Route exact path='/' component={App} />
            <Route path='/playlist' component={App} />
            <Route path='/watchlist' component={WatchList} />
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
