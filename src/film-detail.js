import React from 'react';
import './film-detail.css';

const FilmDetail = ({ film }) => {
    return(
        <div className="film container">
            <div className="film titleContainer">
                <h2 className="film title">{film.name}, {film.releaseDate}</h2>
                <div className="film extra-details-container">
                    <p className="film extra-details">{film.director}</p>
                    <span className="film divider"> | </span> 
                    <p className="film extra-details">{film.genre}</p>
                </div>
                
            </div>
            <img src={film.posterUrl} />
            <p className="synopsys">{film.synopsis}</p>
        </div>
    );
}

export default FilmDetail;