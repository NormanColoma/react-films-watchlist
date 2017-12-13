import React from 'react';
import ReactDOM from 'react-dom';

//Components and containers
import App from './components/app/App';
import WatchList from './containers/watchlist/watchlist';
import Nav from './components/nav/nav';
import registerServiceWorker from './registerServiceWorker';

//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux'
import configureStore from './configureStore';

// Global styles
import './index.css';
import './buttons.css'

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div className="App">
                <Nav />
                <Route exact path='/' component={App} />
                <Route path='/watchlist' component={WatchList} />
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
