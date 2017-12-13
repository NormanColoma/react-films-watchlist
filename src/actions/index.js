import fetch from 'cross-fetch';
import Film from '../domain/Film';

export const toggleFilm = (id) => ({
  type: 'TOGGLE_FILM',
  id
});

export const addToWatchlist = (film) => ({
  type: 'ADD_TO_WATCHLIST',
  film
});

export const addToPlaylist = (film) => ({
  type: 'ADD_TO_PLAYLIST',
  film
});

export const removeFromWatchlist = (id) => ({
  type: 'REMOVE_FROM_WATCHLIST',
  id
});

export const fetchFilm = (title) => {
  return dispatch => {
    return fetch(`http://www.omdbapi.com/?apiKey=55b399cc&t=${title}&plot=full`)
      .then(response => response.json())
      .then((filmJson) => {
        const film = new Film(filmJson);
        dispatch(addToPlaylist(film));
      })
  }
}