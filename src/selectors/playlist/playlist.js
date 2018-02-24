// @flow
import { createSelector } from 'reselect';
import { isSomeGenreInFilter } from './utils';
import type { State } from '../../reducers/playlist';

const ALL_GENRES: string = 'all';
const ALL_GENRES_LITERAL: string = 'All Genres';


const getFilms = (state: State) => state.films;
const getSelectedId = (state: State, id: string) => id;
const getFilter = (state: State, paramsFilter: Object) => paramsFilter || state.filter;

export const getFilm = (state: State) => state.selectedFilm;
export const isLoading = (state: State) => state.loading;

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