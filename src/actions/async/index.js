// @flow
import fetch from 'cross-fetch';
import FilmAdapter from '../../adapters/FilmAdapter';
import PosterFilmAdapter from '../../adapters/PosterFilmAdapter';
import { addToPlaylist, loadingFilm, selectFilm, addToSearchlist } from '../index';
import Film from '../../domain/Film';
import PosterFilm from '../../domain/PosterFilm';

const API_URL = 'http://www.omdbapi.com/?apiKey=55b399cc';

export const fetchFilm = (title: string) => async (dispatch: Function) => {
    try {
        const response: Object = await fetch(`${API_URL}&t=${title}&plot=full`);
        const json: Object = await response.json();
        const film: Film = FilmAdapter.toDomain(json);
        dispatch(addToPlaylist(film));
    } catch (err) {
        // TODO: Dispatch action when error
    }
}

export const fetchFilmById = (id: string) => async (dispatch: Function) => {
    try {
        dispatch(loadingFilm());
        const response: Object = await fetch(`${API_URL}&i=${id}&plot=full`);
        const json: Object = await response.json();
        const film: Film = FilmAdapter.toDomain(json);

        dispatch(addToPlaylist(film));
        dispatch(selectFilm(film.id));
    } catch (err) {
        dispatch(loadingFilm());
    }
}

export const fetchFilmsByTerm = (term: string) => async (dispatch: Function) => {
    try {
        const response: Object = await fetch(`${API_URL}&s=${term}&type=movie`);
        const { Search: films } = await response.json();
        const posters: Array<PosterFilm> = films.map(it => PosterFilmAdapter.toDomain(it));

        dispatch(addToSearchlist(posters));
    } catch (err) {
        // TODO: Dispatch action when error
    }
}