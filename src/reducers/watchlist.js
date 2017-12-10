const watchlist = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_WATCHLIST': 
            const { film } = action;
            const filmNotAddedYet = state.every(it => it.id !== film.id);

            if (filmNotAddedYet) {
                return [ ...state, film];
            } 

            return state;
        case 'REMOVE_FROM_WATCHLIST': 
            const watchlist = state.filter(it => it.id !== action.id);
            return watchlist;
        default: 
            return state;
    }
};

export default watchlist;