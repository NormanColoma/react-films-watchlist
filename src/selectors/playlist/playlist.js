import { createSelector } from 'reselect';
import { isSomeGenreInFilter } from './utils';

const ALL_GENRES = 'all';
const ALL_GENRES_LITERAL = 'All Genres';


const getFilms = state => state.films;
const getSelectedId = (state, id) => id;
const getFilter = (state, paramsFilter) => paramsFilter || state.filter;

export const getFilm = (state) => state.selectedFilm;
export const isLoading = (state) => state.loading;

export const getPlaylist = createSelector(
    [getFilms],
    films => Object.keys(films).map(key => films[key])
);

export const existsFilm = createSelector(
    [getPlaylist, getSelectedId],
    (films, id) => films[id] ? true : false
);

export const getSelectedFilter = createSelector(
    [getFilter],
    filter => filter === ALL_GENRES ? ALL_GENRES_LITERAL : filter
);

export const getVisibleFilms = createSelector(
    [getPlaylist, getSelectedFilter], 
    (films, filter) => (filter === ALL_GENRES || filter === ALL_GENRES_LITERAL) ? films : 
        films.filter(it => isSomeGenreInFilter(it, filter))
);