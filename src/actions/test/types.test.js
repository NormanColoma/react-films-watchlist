import * as Actions from '../index';
import * as Types from '../types';

describe('action creators', () => {

    it('should return toggle film action', () => {
        const id = 1;
        const expectedAction = {
            type: Types.TOGGLE_FILM,
            id
        };

        expect(Actions.toggleFilm(id)).toEqual(expectedAction);
    });

    it('should return add to watchlist action', () => {
        const film = {};
        const expectedAction = {
            type: Types.ADD_TO_WATCHLIST,
            film
        };

        expect(Actions.addToWatchlist(film)).toEqual(expectedAction);
    });
    
    it('should return add to playlist action', () => {
        const film = {};
        const expectedAction = {
            type: Types.ADD_TO_PLAYLIST,
            film
        };

        expect(Actions.addToPlaylist(film)).toEqual(expectedAction);
    });
    
    it('should return add to searchlist action', () => {
        const posters = [];
        const expectedAction = {
            type: Types.ADD_TO_SEARCHLIST,
            posters
        };

        expect(Actions.addToSearchlist(posters)).toEqual(expectedAction);
    });

    it('should return remove from watchlist action', () => {
        const id = 1;
        const expectedAction = {
            type: Types.REMOVE_FROM_WATCHLIST,
            id
        };

        expect(Actions.removeFromWatchlist(id)).toEqual(expectedAction);
    });

    it('should return select film action', () => {
        const id = 1;
        const expectedAction = {
            type: Types.SELECT_FILM,
            id
        };

        expect(Actions.selectFilm(id)).toEqual(expectedAction);
    });
    
    it('should return filterFilms action', () => {
        const filter = 'all';
        const expectedAction = {
            type: Types.FILTER_FILMS,
            filter
        };

        expect(Actions.filterFilms(filter)).toEqual(expectedAction);
    });
    
    it('should return loadFilm action', () => {
        const expectedAction = { type: Types.LOADING_FILM };

        expect(Actions.loadingFilm()).toEqual(expectedAction);
    });

    it('should return clearSearchlist action', () => {
        const expectedAction = { type: Types.CLEAR_SEARCHLIST };

        expect(Actions.clearSearchlist()).toEqual(expectedAction);
    });

    it('should return searchlistError action', () => {
        const error = 'Movie not found!';
        const expectedAction = { type: Types.SEARCHLIST_ERROR, error };

        expect(Actions.searchlistError(error)).toEqual(expectedAction);
    });
});