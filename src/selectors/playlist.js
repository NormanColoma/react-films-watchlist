const ALL_GENRES = 'All Genres';

export const getPlaylist = (state) => Object.keys(state.films).map(key => state.films[key]);
export const getFilm = (state) => state.selectedFilm;
export const isLoading = (state) => state.loading;
export const getFilter = (state) => state.filter === 'all' ? ALL_GENRES : state.filter;
export const existsFilm = (state, id) => {
    if (state.films) {
        return state.films[id] ? true : false;
    }
    return false;
}