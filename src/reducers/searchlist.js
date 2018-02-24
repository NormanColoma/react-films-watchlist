// @flow
import * as Actions from '../actions/types';
import PosterFilm from '../domain/PosterFilm';

export type State = {
    posters: PosterFilm,
    loading: boolean
}

const initialState: State = { posters: {}, loading: false };

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
        default: 
            return state;
    }
};

export default searchlist;