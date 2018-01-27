import { combineReducers } from 'redux';
import playlist, * as fromPlaylist from './playlist';
import watchlist, * as fromWatchlist from './watchlist';
import searchlist, * as fromSearchlist from './searchlist';

const rootReduder = combineReducers({
    playlist,
    watchlist,
    searchlist
});

export default rootReduder;

export const getPlaylist = (state) => fromPlaylist.getPlaylist(state.playlist);
export const getFilter = (state) => fromPlaylist.getFilter(state.playlist);
export const getFilm = (state) => fromPlaylist.getFilm(state.playlist);
export const getWatchlist = (state) => fromWatchlist.getWatchlist(state.watchlist);
export const filmIsLoading = (state) => fromPlaylist.isLoading(state.playlist);
export const getSearchlist = (state) => fromSearchlist.getSearchlist(state.searchlist);
export const existsFilm = (state, filmId) => fromPlaylist.existsFilm(state.playlist, filmId);