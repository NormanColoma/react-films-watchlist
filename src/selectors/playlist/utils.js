// @flow
import Film from '../../domain/Film';

const COMMA: string = ',';
const NONE: string = "";

export const extractGenresFromFilm = (genre: string) => {
    let i: number = 0;
    const genres: Array<string> = [];
    let genreExtracted: string = NONE; 

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

export const isSomeGenreInFilter = (film: Film, filter: Object) => { 
    const genre = film.genre.replace(/\s/g, NONE);
    const genres = extractGenresFromFilm(genre.toLowerCase());

    return genres.some(it => it === filter.toLowerCase())
}

export const extractMainGenreFromFilm = (genres: string) => genres.substr(0, genres.indexOf(COMMA));

export const isNotSameFilm = (film, anotherFilm) => film.id !== anotherFilm.id;