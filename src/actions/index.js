export const toggleFilm = (id) => ({
  type: 'TOGGLE_FILM',
  id
});

export const addToWatchlist = (film) => ({
  type: 'ADD_TO_WATCHLIST',
  film
});

export const removeFromWatchlist = (id) => ({
  type: 'REMOVE_FROM_WATCHLIST',
  id
});