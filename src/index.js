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
            <App />
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
