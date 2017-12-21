import * as Types from '../actions/types';

const playlist = (state = { films: {}, selectedFilm: null }, action) => {
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

            return Object.assign({}, state, { films: newFilms });
        }
        case Types.SELECT_FILM: {
            const { id } = action;
            if (!Object.keys(state.films).includes(id.toString())) {
                return state;
            } 
            const selectedFilm = state.films[id];
            debugger;
            return Object.assign({}, state, { selectedFilm : selectedFilm});
        }
        default: 
            return state;
    }
};

export default playlist;

export const getPlaylist = (state) => Object.keys(state.films).map(key => state.films[key]);
export const getFilm = (state) => state.selectedFilm;