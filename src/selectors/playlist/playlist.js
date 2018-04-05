// @flow
import { createSelector } from 'reselect';
import { isSomeGenreInFilter, extractMainGenreFromFilm, isNotSameFilm } from './utils';
import type { State } from '../../reducers/playlist';

const ALL_GENRES: string = 'all';
const ALL_GENRES_LITERAL: string = 'All Genres';
const MAXIMUM_SUGGESTIONS: number = 4;


const getFilms = (state: State) => state.films;
const getSelectedId = (state: State, id: string) => id;
const getFilter = (state: State, paramsFilter: Object) => paramsFilter || state.filter;

export const getFilm = (state: State) => state.selectedFilm;
export const isLoading = (state: State) => state.loading;
export const getSelectedFilmSuggested = (state : State) => state.selectedFilmSuggested; 

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

export const getSuggestedFilms = createSelector(
    [getPlaylist, getFilm],
    (films, film) => {

        let firstSuggestedFilms: Array<Object> = [];
        if (films && films.length > 0 && film) {
            const mainGenre: string = extractMainGenreFromFilm(film.genre);
            const suggestedFilms: Array<Object> = films.filter(it => isSomeGenreInFilter(it, mainGenre) && isNotSameFilm(it, film));

            if (suggestedFilms.length >= MAXIMUM_SUGGESTIONS) {
                let remainingSuggestedFilms: Array<Object> = [...suggestedFilms];
                
                for(let i=0;i<MAXIMUM_SUGGESTIONS;i++) {
                    const randomIndex: number = Math.floor(Math.random()*remainingSuggestedFilms.length);
                    const suggestedFilm: Object = remainingSuggestedFilms[randomIndex];

                    remainingSuggestedFilms = remainingSuggestedFilms.filter(it => it.id !== suggestedFilm.id);
                    firstSuggestedFilms = [...firstSuggestedFilms, suggestedFilm];
                }
            }
        }
        return firstSuggestedFilms;
    }
);