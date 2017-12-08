const addFilm = (film) => {
    return function update(state) {
        const filmNotAddedYet = state.watchlist.every(it => it.id !== film.id);
        const index = state.playlist.findIndex(it => it.id === film.id);
        
        if (filmNotAddedYet) {
            return { 
                playlist: Object.assign([], state.playlist, {
                    [index]: Object.assign({}, film, { inWatchList: true })
                }),
                watchlist: [...state.watchlist, film] 
            };
        }
    }
};

const removeFilm = (film) => {
    return function update(state) {
        const index = state.playlist.findIndex(it => it.id === film.id);
        const watchlist = state.watchlist.filter(it => it.id !== film.id);  
        
        return { 
            playlist: Object.assign([], state.playlist, {
                [index]: Object.assign({}, film, { inWatchList: false })
            }),
            watchlist
        };
    }
};

export { addFilm, removeFilm };