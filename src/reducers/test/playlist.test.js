import playlist from '../playlist';
import { loadingFilm, selectFilm, addToPlaylist, toggleFilm, filterFilms, selectSuggestedFilm } from '../../actions';

describe('playlist reducer', () => {
    it('should return the initial state', () => {
        const initialState = { 
            films: {}, 
            selectedFilm: null, 
            selectedFilmSuggested: null,
            loading: false, 
            filter: 'all' 
        };
        const UNREGISTERED_ACTION = 'UNREGISTERED_ACTION';

        expect(playlist(undefined, UNREGISTERED_ACTION)).toEqual(initialState);
    });

    it('should toogle loading', () => {
        const expectedState = { 
            films: {}, 
            selectedFilm: null,
            selectedFilmSuggested: null, 
            loading: true, 
            filter: 'all' 
        };

        expect(playlist(undefined, loadingFilm())).toEqual(expectedState);
    });

    it('should return initial state when film not found', () => {
        const initialState = { 
            films: {}, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };

        expect(playlist(initialState, selectFilm("id"))).toEqual(initialState);
    });
    
    it('should set selectedFilm when film is in store', () => {
        const initialState = { 
            films: {
                "id": { name: "film" }
            }, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };

        const expectedState = { 
            films: {
                "id": { name: "film" }
            }, 
            selectedFilm: { name: "film" }, 
            loading: false, 
            filter: 'all' 
        };

        expect(playlist(initialState, selectFilm("id"))).toEqual(expectedState);
    });

    it('should add new film to state', () => {
        const initialState = { 
            films: {
                "1": { id: 1, name: "film" }
            }, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };

        const newFilm = {
            id: 2,
            name: "another film"
        };
        
        const expectedState = { 
            films: {
                "1": { id: 1, name: "film" },
                "2": { id: 2, name: "another film" }
            }, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };

        expect(playlist(initialState, addToPlaylist(newFilm))).toEqual(expectedState);
    });

    it('should not add the film when it is already in the state', () => {
        const initialState = { 
            films: {
                "1": { id: 1, name: "film" }
            }, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };

        const newFilm = {
            id: 1,
            name: "same film"
        };

        expect(playlist(initialState, addToPlaylist(newFilm))).toEqual(initialState);
    });

    it('should toggle film (sets inWatchList to true or false)', () => {
        const initialState = { 
            films: {
                "1": { id: 1, name: "film", inWatchList: false }
            }, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };

        const expectedState = { 
            films: {
                "1": { id: 1, name: "film", inWatchList: true }
            }, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };
        
        const idOfFilmToWatch = 1;

        expect(playlist(initialState, toggleFilm(idOfFilmToWatch))).toEqual(expectedState);
    });

    it('should not toggle film when the film does not exist in the store', () => {
        const initialState = { 
            films: {
                "1": { id: 1, name: "film", inWatchList: false }
            }, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };

        const idOfFilmToWatch = 2;

        expect(playlist(initialState, toggleFilm(idOfFilmToWatch))).toEqual(initialState);
    });

    it('should set the filter in the state', () => {
        const initialState = { 
            films: {}, 
            selectedFilm: null, 
            loading: false, 
            filter: 'all' 
        };

        const newFilter = 'drama';

        const expectedState = { 
            films: {}, 
            selectedFilm: null, 
            loading: false, 
            filter: newFilter 
        };

        expect(playlist(initialState, filterFilms(newFilter))).toEqual(expectedState);
    });

    it('should set selected film in state', () => {
        const film = { id: 1, name: 'film', inWatchList: false };
        const initialState = { 
            films: {
                '1': film
            }, 
            selectedFilm: null, 
            selectedFilmSuggested: null,
            loading: false, 
            filter: 'all' 
        };

        const filmId = 1;
        const selectedFilmSuggested = { selectedFilmSuggested: film };
        const expectedState = { ...initialState, ...selectedFilmSuggested };

        expect(playlist(initialState, selectSuggestedFilm(filmId))).toEqual(expectedState);
    });
});