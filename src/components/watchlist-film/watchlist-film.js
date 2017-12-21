import React from 'react';
import './watchlist-film.css';

const WatchlistFilm = ({ film, onRemoveFilm }) => {
    return (
        <div className="watchlist film container">
            <img src={film.poster} alt={film.name}/>
            <h3 className="title">{film.name}</h3>
            <a onClick={() => onRemoveFilm(film)}>
                <i className="fas fa-heart"></i>
            </a>
            
            <div className="film-extra-details">
                <p className="film extra-details">{film.duration}</p>
                <span className="film divider"> | </span> 
                <p className="film extra-details">{film.genre}</p>
            </div>
            <p className="synopsys">{film.synopsys}</p>
        </div>
    )
};

export default WatchlistFilm;