import { TOGGLE_FILM, ADD_TO_PLAYLIST, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, SELECT_FILM, LOADING_FILM } from './types';

export const toggleFilm = (id) => ({
  type: TOGGLE_FILM,
  id
});

export const addToWatchlist = (film) => ({
  type: ADD_TO_WATCHLIST,
  film
});

export const addToPlaylist = (film) => ({
  type: ADD_TO_PLAYLIST,
  film
});

export const removeFromWatchlist = (id) => ({
  type: REMOVE_FROM_WATCHLIST,
  id
});

export const selectFilm = (id) => ({
  type: SELECT_FILM,
  id
});

export const loadingFilm = () =>({
  type: LOADING_FILM
});