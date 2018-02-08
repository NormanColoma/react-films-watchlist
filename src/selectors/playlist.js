import { createSelector } from 'reselect'

const ALL_GENRES = 'all';
const ALL_GENRES_LITERAL = 'All Genres';
const COMMA = ',';
const NONE = "";

export const getPlaylist = (state) => Object.keys(state.films).map(key => state.films[key]);
export const getFilm = (state) => state.selectedFilm;
export const isLoading = (state) => state.loading;
export const getFilter = (state, paramsFilter) =>{ 
    const filter = paramsFilter || state.filter;
    return filter === ALL_GENRES ? ALL_GENRES_LITERAL : filter;
}
export const existsFilm = (state, id) => {
    if (state.films) {
        return state.films[id] ? true : false;
    }
    return false;
}

export const getVisibleFilms = createSelector(
    [getPlaylist, getFilter], 
    (films, filter) => { 
        return(filter === ALL_GENRES || filter === ALL_GENRES_LITERAL) ? 
        films : films.filter(it => isSomeGenreInFilter(it, filter))
    }
);

const extractGenresFromFilm = (genre) => {
    let i = 0;
    const genres = [];
    let genreExtracted = NONE; 

    while(i <= genre.length) {
        if (genre[i] === COMMA || i === genre.length) {
            genres.push(genreExtracted);
            genreExtracted = NONE;
        } else {
            genreExtracted = genreExtracted.concat(genre[i]);
        }
        i++;
    }
    return genres;
}

const isSomeGenreInFilter = (film, filter) => { 
    const genre = film.genre.replace(/\s/g, NONE);
    const genres = extractGenresFromFilm(genre.toLowerCase());

    return genres.some(it => it === filter.toLowerCase())
}