// @flow
import React from 'react';
import './watchlist-film.css';
import Film from '../../domain/Film';

type Props = {
    film: Film,
    onRemoveFilm: Function
};

const WatchlistFilm = ({ film, onRemoveFilm }: Props) => {
    return (
        <div className="film container">
            <div className="film-inner-container">
                <img src={film.poster} alt={film.name} />
                <div className="film-inner-container__title">
                    <div className="watchlist-film__title-container">
                        <div className="film-release-container">
                            <h2 className="watchlist-film__title">{film.name}</h2>
                            <span><i className="fas fa-clock"></i>{film.duration}</span>
                        </div>
                        <div className="film fav" onClick={() => onRemoveFilm(film)}>
                            <i className="fas fa-heart"></i>
                        </div>
                    </div>
                    <p className="synopsys">{film.synopsys}</p>
                </div>
            </div>
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