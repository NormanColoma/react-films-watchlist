import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, logger)
    );
};

export default configureStore;