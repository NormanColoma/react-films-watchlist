import React from 'react';

const FilmDetail = ({ film }) => {
    return(
        <div className="film container">
            <h2 className="film title">{film.name}, {film.releaseDate}</h2>
            <img src={film.posterUrl} />
            <p>{film.synopsis}</p>
        </div>
    );
}

export default FilmDetail;