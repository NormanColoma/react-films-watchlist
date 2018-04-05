// @flow
import * as Actions from '../actions/types';
import PosterFilm from '../domain/PosterFilm';

export type State = {
    posters: PosterFilm,
    loading: boolean,
    error: ?string
}

const initialState: State = { posters: {}, loading: false, error: null };

const searchlist = (state: State = initialState, action: Object) => {
    switch (action.type) {
        case Actions.ADD_TO_SEARCHLIST: {
            const { posters } = action;
            let newPosters = {};

            posters.forEach((it) => {
                newPosters = {...newPosters, [it.id]: it};
            });

            return Object.assign({}, state, { posters: newPosters });
        }

        case Actions.CLEAR_SEARCHLIST: {
            return Object.assign({}, state, initialState);
        }

        case Actions.SEARCHLIST_ERROR: {
            const { error } = action;

            return Object.assign({}, state, { error });
        }
        default: 
            return state;
    }
};

export default searchlist;