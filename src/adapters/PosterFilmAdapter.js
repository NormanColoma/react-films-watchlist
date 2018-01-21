import PosterFilm from '../domain/PosterFilm';

export default class PosterFilmAdapter {
    static toDomain(posterJson) {
        const poster = new PosterFilm();
        poster.id = posterJson.imdbID;
        poster.name = posterJson.Title;
        poster.releasedDate = posterJson.Year;
        poster.poster = posterJson.Poster;
        poster.inWatchList = false;
        return poster;
    }
};