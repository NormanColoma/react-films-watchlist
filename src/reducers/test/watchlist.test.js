import watchlist from '../watchlist';
import { addToWatchlist, removeFromWatchlist } from '../../actions';

describe('watchlist reducer', () => {

    it('should return intial state', () =>{
        const initialState = { };
        expect(watchlist(undefined, 'UNNREGISTERED_ACTION')).toEqual(initialState);
    });

    it('should add new film to watchlist store when it is new', () => {
        const initialState = { };

        const newFilm = { id: 1, name: 'film' };

        const expectedState = {
            "1": { id: 1, name: 'film' }
        };

        expect(watchlist(initialState, addToWatchlist(newFilm))).toEqual(expectedState);
    });

    it('should not add the film to watchlist store when it is not new', () => {
        const initialState = { 
            "1": { id: 1, name: 'film' }
        };

        const newFilm = { id: 1, name: 'film' };

        const expectedState = {
            "1": { id: 1, name: 'film' }
        };

        expect(watchlist(initialState, addToWatchlist(newFilm))).toEqual(expectedState);
    });

    it('should remove film from watchlist store when film exists', () => {
        const initialState = { 
            "1": { id: 1, name: 'film' }
        };

        const filmIdToBeRemoved = 1;

        const expectedState = {};

        expect(watchlist(initialState, removeFromWatchlist(filmIdToBeRemoved))).toEqual(expectedState);
    });

    it('should not remove film from watchlist store when film does not exist', () => {
        const initialState = { 
            "1": { id: 1, name: 'film' }
        };

        const filmIdToBeRemoved = 2;

        const expectedState = {
            "1": { id: 1, name: 'film' }
        };

        expect(watchlist(initialState, removeFromWatchlist(filmIdToBeRemoved))).toEqual(expectedState);
    });

});