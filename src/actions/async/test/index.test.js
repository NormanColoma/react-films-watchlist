import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchFilm } from '../index';
import * as types from '../../types';
import fetchMock from 'fetch-mock';
import FilmAdapter from '../../../adapters/FilmAdapter';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

xdescribe('async action creators', () => {

    const API_URL = 'http://www.omdbapi.com/?apiKey=55b399cc';
    const headers = { 'content-type': 'application/json' };

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
      })

    it('creates ADD_TO_PLAYLIST action after fetch a film correctly', async() => {
        const filmName = 'Dunkirk';
        const requestUri = `${API_URL}&t=${filmName}&plot=full`;
        const fakeFilm = {
            imdbID: 'imdb1',
            Title: filmName,
            Released: '2012',
            Director: 'Peter Jackson',
            Runtime: 150,
            Poster: 'poster',
            Plot: 'this is a great film',
            Genre: 'Action, Adventure, Fantasy',
            imdbRating: '9',
            Actors: 'Vigo Mortensen'
        };

        fetchMock
            .once('http://www.omdbapi.com/?apiKey=55b399cc&t=Dunkirk&plot=full', {});

        const film = FilmAdapter.toDomain(fakeFilm);
        const expectedActions = [
            { type: types.ADD_TO_PLAYLIST, film }
        ];

        const store = mockStore({ films: {} });

        await store.dispatch(fetchFilm(filmName));
        expect(store.getActions()).toEqual(expectedActions);
    });
});