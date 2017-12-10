import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import WatchList from './containers/watchlist/watchlist';
import Nav from './components/nav/nav';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div className="App">
                <Nav />
                <Route exact path='/' component={App} />
                <Route path='/playlist' component={App} />
                <Route path='/watchlist' component={WatchList} />
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
