import * as playlistSelectors from './playlist/playlist';
import * as watchlistSelectors from './watchlist';
import * as searchlistSelectors from './searchlist';
import * as userSelectors from './user';

//Playlist
export const getPlaylist = (state) => playlistSelectors.getPlaylist(state.playlist);
export const getSelectedFilter = (state, filter) => playlistSelectors.getSelectedFilter(state.playlist);
export const getFilm = (state) => playlistSelectors.getFilm(state.playlist);
export const filmIsLoading = (state) => playlistSelectors.isLoading(state.playlist);
export const existsFilm = (state, filmId) => playlistSelectors.existsFilm(state.playlist, filmId);
export const getVisibleFilms = (state, paramsFilter) => playlistSelectors.getVisibleFilms(state.playlist, paramsFilter);

//Watchlist
export const getWatchlist = (state) => watchlistSelectors.getWatchlist(state.watchlist);

//Searchlist
export const getSearchlist = (state) => searchlistSelectors.getSearchlist(state.searchlist);

//User 
export const isAuthenticated = (state) => userSelectors.isAuthenticated(state.user);
export const checkingAuthentication = (state) => userSelectors.isCheckingAuthentication(state.user);
export const getAuthenticatedUser = (state) => userSelectors.getPrincipal(state.user);