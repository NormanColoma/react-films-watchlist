import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );
};

export default configureStore;