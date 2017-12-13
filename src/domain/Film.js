export default class Film {
    constructor(filmJson) {
        this.id = filmJson.imdbID;
        this.name = filmJson.Title;
        this.releasedDate = filmJson.Released;
        this.director = filmJson.Director;
        this.duration = filmJson.Runtime;
        this.poster = filmJson.Poster;
        this.synopsys = filmJson.Plot;
        this.genre = filmJson.Genre;
        this.inWatchList = false;
    }
};