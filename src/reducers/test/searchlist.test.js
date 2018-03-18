import searchlist from '../searchlist';
import { addToSearchlist, clearSearchlist, searchlistError } from '../../actions';

describe('searchlist reducer', () => {
    
    it('should return intial state', () =>{
        const initialState = { posters: {}, loading: false, error: null };
        expect(searchlist(undefined, 'UNNREGISTERED_ACTION')).toEqual(initialState);
    });

    it('should add new posters to store', () => {
        const initialState = { posters: {}, loading: false, error: null };

        const newPosters = [{ id: 1, name: 'first film' }, { id: 2, name: 'second film' }];

        const expectedState = {
            posters: {
                "1": { id: 1, name: 'first film' },
                "2": { id: 2, name: 'second film' }
            },
            loading: false,
            error: null
        };

        expect(searchlist(initialState, addToSearchlist(newPosters))).toEqual(expectedState);
    });

    it('should clear search list', () => {
        const initialState = {  
            posters: {
                "1": { id: 1, name: 'first film' },
                "2": { id: 2, name: 'second film' }
            },
            loading: false,
            error: null
        };

        const expectedState = { posters: {}, loading: false, error: null };

        expect(searchlist(initialState, clearSearchlist())).toEqual(expectedState);
    });

    it('should set error in searcg list', () => {
        const initialState = { posters: {}, loading: false, error: null };

        const error = 'Movie not found!!';
        const expectedState = { posters: {}, loading: false, error };

        expect(searchlist(initialState, searchlistError(error))).toEqual(expectedState);
    });
});