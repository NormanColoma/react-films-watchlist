import fetch from 'cross-fetch';
import FilmAdapter from '../../adapters/FilmAdapter';
import PosterFilmAdapter from '../../adapters/PosterFilmAdapter';
import { addToPlaylist, loadingFilm, selectFilm, addToSearchlist } from '../index';

const API_URL = 'http://www.omdbapi.com/?apiKey=55b399cc';

export const fetchFilm = (title) => async (dispatch) => {
    try {
        const response = await fetch(`${API_URL}&t=${title}&plot=full`);
        const json = await response.json();
        const film = FilmAdapter.toDomain(json);
        dispatch(addToPlaylist(film));
    } catch (err) {
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
    } catch (err) {
        dispatch(loadingFilm());
    }
}

export const fetchFilmsByTerm = (term) => async (dispatch) => {
    try {
        const response = await fetch(`${API_URL}&s=${term}&type=movie`);
        const { Search: films } = await response.json();
        const posters = films.map(it => PosterFilmAdapter.toDomain(it));

        posters.forEach(it => dispatch(addToSearchlist(it)));
    } catch (err) {
        // TODO: Dispatch action when error
    }
}