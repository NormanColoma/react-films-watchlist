import fetch from 'cross-fetch';
import Film from '../domain/Film';
import FilmAdapter from '../adapters/FilmAdapter';

const API_URL = 'http://www.omdbapi.com/?apiKey=55b399cc';

export const TOGGLE_FILM = 'TOGGLE_FILM';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

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

export const fetchFilm = (title) => async (dispatch) => {
  try {
    const response = await fetch(`${API_URL}&t=${title}&plot=full`);
    const json = await response.json();
    const film = FilmAdapter.toDomain(json);
    dispatch(addToPlaylist(film));
  } catch(err) {
    // TODO: Dispatch action when error
  }
}