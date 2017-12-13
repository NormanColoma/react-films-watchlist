import Film from '../domain/Film';

export default class FilmAdapter {
    static toDomain(filmJson) {
        const film = new Film();
        film.id = filmJson.imdbID;
        film.name = filmJson.Title;
        film.releasedDate = filmJson.Released;
        film.director = filmJson.Director;
        film.duration = filmJson.Runtime;
        film.poster = filmJson.Poster;
        film.synopsys = filmJson.Plot;
        film.genre = filmJson.Genre;
        film.rating = filmJson.imdbRating;
        film.actors = filmJson.Actors;
        film.inWatchList = false;
        return film;
    }
};