import fetch from 'cross-fetch';
import FilmAdapter from '../adapters/FilmAdapter';
import { TOGGLE_FILM, ADD_TO_PLAYLIST, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, SELECT_FILM, LOADING_FILM } from './types';

const API_URL = 'http://www.omdbapi.com/?apiKey=55b399cc';

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
})

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

export const fetchFilmById = (id) => async (dispatch) => {
  try {
    dispatch(loadingFilm());
    const response = await fetch(`${API_URL}&i=${id}&plot=full`);
    const json = await response.json();
    const film = FilmAdapter.toDomain(json);
    
    dispatch(addToPlaylist(film));
    dispatch(selectFilm(film.id));
  } catch(err) {
    dispatch(loadingFilm());
  }
}