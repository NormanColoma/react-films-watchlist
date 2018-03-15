import { createSelector } from 'reselect';

const getFilms = (state : Object) => state;

export const getWatchlist = createSelector(
    [getFilms],
    films => Object.keys(films).map(key => films[key])
);

export const getNumberOfFilms = createSelector(
    [getWatchlist],
    (films) => films.length
);