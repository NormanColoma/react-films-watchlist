import { combineReducers } from 'redux';
import playlist from './playlist';
import watchlist from './watchlist';
import searchlist from './searchlist';

const rootReduder = combineReducers({
    playlist,
    watchlist,
    searchlist
});

export default rootReduder;