import * as Actions from '../actions';

const watchlist = (state = {}, action) => {
    switch (action.type) {
        case Actions.ADD_TO_WATCHLIST: 
            const { film } = action;
            const filmNotAddedYet = !Object.keys(state).includes(film.id.toString());

            if (filmNotAddedYet) {
                return { ...state, [film.id]: film };
            } 

            return state;
        case Actions.REMOVE_FROM_WATCHLIST: 
            const { [action.id.toString()]: deletedItem, ...remainingWatchlist } = state;
            return remainingWatchlist;
        default: 
            return state;
    }
};

export default watchlist;

export const getWatchlist = (state) => Object.keys(state).map(key => state[key]);