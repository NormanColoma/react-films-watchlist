import React from 'react';
import ReactDOM from 'react-dom';

//Components and containers
import App from './components/app/App';
import WatchList from './containers/watchlist/watchlist';
import Nav from './components/nav/nav';
import registerServiceWorker from './registerServiceWorker';
import Film from './components/film/film';

//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import { fetchFilm } from './actions';

// Global styles
import './index.css';
import './buttons.css'

const store = configureStore();

store.dispatch(fetchFilm('Shutter Island'));
store.dispatch(fetchFilm('Django Unchained'));
store.dispatch(fetchFilm('Coco'));
store.dispatch(fetchFilm('Star Wars: Episode III'));

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div className="App">
                <Nav />
                <Route exact path='/' component={App} />
                <Route path='/watchlist' component={WatchList} />
                <Route path='/films/:id' component={Film} />
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
