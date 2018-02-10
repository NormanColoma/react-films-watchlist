import { createSelector } from 'reselect';

const getFilms = state => state;

export const getWatchlist = createSelector(
    [getFilms],
    films => Object.keys(films).map(key => films[key])
);