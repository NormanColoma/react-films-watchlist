import searchlist from '../searchlist';
import { addToSearchlist, clearSearchlist } from '../../actions';

describe('searchlist reducer', () => {
    
    it('should return intial state', () =>{
        const initialState = { posters: {}, loading: false };
        expect(searchlist(undefined, 'UNNREGISTERED_ACTION')).toEqual(initialState);
    });

    it('should add new posters to store', () => {
        const initialState = { posters: {}, loading: false };

        const newPosters = [{ id: 1, name: 'first film' }, { id: 2, name: 'second film' }];

        const expectedState = {
            posters: {
                "1": { id: 1, name: 'first film' },
                "2": { id: 2, name: 'second film' }
            },
            loading: false
        };

        expect(searchlist(initialState, addToSearchlist(newPosters))).toEqual(expectedState);
    });

    it('should clear search list', () => {
        const initialState = {  
            posters: {
                "1": { id: 1, name: 'first film' },
                "2": { id: 2, name: 'second film' }
            },
            loading: false
        };

        const expectedState = { posters: {}, loading: false };

        expect(searchlist(initialState, clearSearchlist())).toEqual(expectedState);
    });
});