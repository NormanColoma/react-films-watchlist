import { combineReducers } from 'redux';
import playlist from './playlist';
import watchlist from './watchlist';

const rootReduder = combineReducers({
    playlist,
    watchlist
});

export default rootReduder;