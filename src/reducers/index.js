import { combineReducers } from 'redux';
import playlist from './playlist';
import watchlist from './watchlist';
import searchlist from './searchlist';
import user from './user';

const rootReduder = combineReducers({
    playlist,
    watchlist,
    searchlist,
    user
});

export default rootReduder;