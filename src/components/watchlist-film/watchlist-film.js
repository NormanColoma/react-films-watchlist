import React from 'react';
import './watchlist-film.css';

const WatchlistFilm = ({ film, onRemoveFilm }) => {
    return (
        <div className="film container">
            <img src={film.poster} alt={film.name} />
            <div className="film titleContainer">
                <div className="film titleReleaseContainer">
                    <h2 className="film title">{film.name}</h2>
                    <span><i className="fas fa-film"></i> {film.duration}</span>
                </div>
                <div className="film fav" onClick={() => onRemoveFilm(film)}>
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
            </div>
        </div>
    )
};

export default WatchlistFilm;