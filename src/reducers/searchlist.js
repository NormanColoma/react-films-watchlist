import * as Actions from '../actions/types';

const searchlist = (state = { posters: {}, loading: false }, action) => {
    switch (action.type) {
        case Actions.ADD_TO_SEARCHLIST: {
            const { poster } = action;
            const posterNotAddedYet = !Object.keys(state.posters).includes(poster.id.toString());

            if (posterNotAddedYet) {
                const posters = {...state.posters, [poster.id]: poster};
                return Object.assign({}, state, { posters: posters });
            } 
            return state;
        }
        default: 
            return state;
    }
};

export default searchlist;

export const getSearchlist = (state) => Object.keys(state.posters).map(key => state.posters[key]); 