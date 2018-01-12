import { combineReducers } from 'redux';
import playlist, * as fromPlaylist from './playlist';
import watchlist, * as fromWatchlist from './watchlist';

const rootReduder = combineReducers({
    playlist,
    watchlist
});

export default rootReduder;

export const getPlaylist = (state) => fromPlaylist.getPlaylist(state.playlist);
export const getPlaylistByFilter = (state) => fromPlaylist.getPlaylistByFilter(state.playlist);
export const getFilm = (state) => fromPlaylist.getFilm(state.playlist);
export const getWatchlist = (state) => fromWatchlist.getWatchlist(state.watchlist);
export const filmIsLoading = (state) => fromPlaylist.isLoading(state.playlist);