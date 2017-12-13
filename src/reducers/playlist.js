const playlist = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TO_PLAYLIST': 
            debugger;
            const { film } = action;
            const filmNotAddedYet = !Object.keys(state).includes(film.id.toString());

            if (filmNotAddedYet) {
                return { ...state, [film.id]: film };
            } 
        case 'TOGGLE_FILM': 
            const { id } = action;

            if (!Object.keys(state).includes(id.toString())) {
                return state;
            }

            const newState = { ...state };
            newState[id] = Object.assign({}, newState[id], { inWatchList: !newState[id].inWatchList});

            return Object.assign({}, state, newState);
        default: 
            return state;
    }
};

export default playlist;

export const getPlaylist = (state) => Object.keys(state).map(key => state[key]);