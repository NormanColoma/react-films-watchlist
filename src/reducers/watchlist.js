import * as Types from '../actions/types';

const initialState = {};

const watchlist = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_WATCHLIST: 
            const { film } = action;
            const filmNotAddedYet = !Object.keys(state).includes(film.id.toString());

            if (filmNotAddedYet) {
                return { ...state, [film.id]: film };
            } 

            return state;
        case Types.REMOVE_FROM_WATCHLIST: 
            const { [action.id.toString()]: deletedItem, ...remainingWatchlist } = state;
            return remainingWatchlist;
        default: 
            return state;
    }
};

export default watchlist;