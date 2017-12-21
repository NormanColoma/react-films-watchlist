import React from 'react';
import './film-detail.css';

const FilmDetail = ({ film, onFavFilm }) => {
    const favClass = film.inWatchList ? 'film fav' : 'film rating';
    return(
        <div className="film container">
            <div className="film titleContainer">
                <h2 className="film title">{film.name}, {film.releasedDate}</h2>
                <div className="film extra-details-container">
                    <p className="film extra-details">{film.director}</p>
                    <span className="film divider"> | </span> 
                    <p className="film extra-details">{film.genre}</p>
                    <div className={favClass} onClick={() => onFavFilm(film)}>
                        <i className="fab fa-gratipay"></i>
                    </div>
                </div>
                
            </div>
            <img src={film.poster} alt={film.name} />
            <p className="synopsys">{film.synopsys}</p>
        </div>
    );
}

export default FilmDetail;