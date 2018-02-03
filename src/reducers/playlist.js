import * as Types from '../actions/types';

const playlist = (state = { films: {}, selectedFilm: null, loading: false, filter: 'all' }, action) => {
    switch (action.type) {
        case Types.ADD_TO_PLAYLIST: {
            const { film } = action;
            const filmNotAddedYet = !Object.keys(state.films).includes(film.id.toString());

            if (filmNotAddedYet) {
                const films = {...state.films, [film.id]: film};
                return Object.assign({}, state, { films: films });
            } 
            return state;
        }
        case Types.TOGGLE_FILM: {
            const { id } = action;
            if (!Object.keys(state.films).includes(id.toString())) {
                return state;
            }

            const newFilms = { ...state.films };
            newFilms[id] = Object.assign({}, newFilms[id], { inWatchList: !newFilms[id].inWatchList});
            
            return Object.assign({}, state, { films: newFilms, loading: false });
        }
        case Types.SELECT_FILM: {
            const { id } = action;
            if (!Object.keys(state.films).includes(id.toString())) {
                return state;
            } 
            const selectedFilm = state.films[id];
            return Object.assign({}, state, { selectedFilm, loading: false });
        }

        case Types.LOADING_FILM: {
            return Object.assign({}, state, { loading: !state.loading});
        }

        case Types.FILTER_FILMS : {
            const { filter } = action;
            return Object.assign({}, state, { filter });
        }
        default: 
            return state;
    }
};

export default playlist;
