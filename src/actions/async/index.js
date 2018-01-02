import fetch from 'cross-fetch';
import FilmAdapter from '../../adapters/FilmAdapter';
import { addToPlaylist, loadingFilm, selectFilm } from '../index';

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