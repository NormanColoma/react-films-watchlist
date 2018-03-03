// @flow
import fetch from 'cross-fetch';
import FilmAdapter from '../../adapters/FilmAdapter';
import PosterFilmAdapter from '../../adapters/PosterFilmAdapter';
import { addToPlaylist, loadingFilm, selectFilm, addToSearchlist, loadPlaylistComplete } from '../index';
import Film from '../../domain/Film';
import PosterFilm from '../../domain/PosterFilm';
import firebase from '../../configureFirebase';

const API_URL = 'http://www.omdbapi.com/?apiKey=55b399cc';

export const fetchFilm = (title: string) => async (dispatch: Function) => {
    try {
        // const response: Object = await fetch(`${API_URL}&t=${title}&plot=full`);
        // const json: Object = await response.json();
        // const film: Film = FilmAdapter.toDomain(json);
        const ref = await firebase.database().ref('films/').orderByChild('name').equalTo(title).once('value');
        const film = ref.toJSON();
        const key = Object.keys(film)[0];
        dispatch(addToPlaylist(film[key]));
    } catch (err) {
        // TODO: Dispatch action when error
    }
}

export const fetchFilms = () => async (dispatch: Function) => {
    try {
        const ref = await firebase.database().ref('films/').once('value');
        const films = ref.toJSON();
        
        dispatch(loadPlaylistComplete(films));
    } catch(err) {

    }
}

export const fetchFilmById = (id: string) => async (dispatch: Function) => {
    try {
        dispatch(loadingFilm());
        const ref = await firebase.database().ref('films/').orderByChild('id').equalTo(id).once('value');
        const retrievedFilm = ref.toJSON();
        let film: Film = null;

        if (retrievedFilm) {
            film = retrievedFilm[id];
        } else {
            const response: Object = await fetch(`${API_URL}&i=${id}&plot=full`);
            const json: Object = await response.json();
            film = FilmAdapter.toDomain(json);
        }

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

export const authenticateUser = () => (dispatch: Function) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          debugger;
        } else {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    });
}