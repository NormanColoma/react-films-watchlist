const playlist = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_FILM': 
            const index = state.findIndex(it => it.id === action.id);
            if (index === -1) {
                return state;
            }
            return Object.assign([], state, {
                [index]: Object.assign({}, state[index], { inWatchList: !state[index].inWatchList} )
            });
        default: 
            return state;
    }
};

export default playlist;