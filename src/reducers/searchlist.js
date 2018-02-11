import * as Actions from '../actions/types';

const initialState = { posters: {}, loading: false };

const searchlist = (state = initialState, action) => {
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