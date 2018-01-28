import React from 'react';
import { Link } from 'react-router-dom';
import './film-detail.css';

const FilmDetail = ({ film, onFavFilm }) => {
    const favClass = film.inWatchList ? 'film fav' : 'film rating';
    const linkToDetails = `/films/${film.id}`;

    return(
        <div className="film container">
            <img src={film.poster} alt={film.name} />
            <div className="film titleContainer">
                <h2 className="film title">{film.name}, {film.releasedDate}</h2>
                <div className={favClass} onClick={() => onFavFilm(film)}>
                    <i className="fas fa-heart"></i>
                </div>
            </div>
            <p className="synopsys">{film.synopsys}</p>
            <div className="film extra-details-container">
                <div className="film extra-details-left-container">
                    <ul>
                        <li>
                            <i className="fas fa-video"></i><p className="film extra-details">{film.director}</p>
                        </li>
                        <li>
                            <i className="fas fa-tag genre"></i><p className="film extra-details">{film.genre}</p>
                        </li>
                    </ul>
                </div>
                <Link to={linkToDetails} className="default-btn">See More</Link>
            </div>
        </div>
    );
}

export default FilmDetail;