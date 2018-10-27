export default class Film {
    constructor(id, name, releaseDate, director, duration, poster, synopsys, 
        genre, rating, actors) {
            this.id = id;
            this.name = name;
            this.releaseDate = releaseDate;
            this.director = director;
            this.duration = duration;
            this.poster = poster;
            this.synopsys = synopsys;
            this.genre = genre;
            this.rating = rating;
            this.actors = actors;
            this.inWatchList = false;
        }
};