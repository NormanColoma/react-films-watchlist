const COMMA = ',';
const NONE = "";

export const extractGenresFromFilm = (genre) => {
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

export const isSomeGenreInFilter = (film, filter) => { 
    const genre = film.genre.replace(/\s/g, NONE);
    const genres = extractGenresFromFilm(genre.toLowerCase());

    return genres.some(it => it === filter.toLowerCase())
}