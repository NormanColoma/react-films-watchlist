import React from 'react';
import ReactDOM from 'react-dom';

//Components and containers
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

//Router
import { BrowserRouter as Router } from 'react-router-dom';

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
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
