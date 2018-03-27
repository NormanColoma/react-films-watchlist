// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import './film-detail.css';

import Film from '../../../domain/Film';

type Props = {
    film: Film,
    onFavFilm: Function
};

const FilmDetail = ({ film, onFavFilm }: Props) => {
    const favClass = film.inWatchList ? 'film fav' : 'film rating';
    const linkToDetails = `/films/${film.id}`;

    return (
        <div className="film container">
            <div className="film-inner-container">
                <img src={film.poster} alt={film.name} />
                <div className="film titleContainer">
                    <div className="film titleReleaseContainer">
                        <div className="film-container__title-release">
                            <h2 className="film title">{film.name}</h2>
                            <span><i className="fas fa-film"></i> {film.releasedDate}</span>
                        </div>
                        <div className={favClass} onClick={() => onFavFilm(film)}>
                            <i className="fas fa-heart"></i>
                        </div>
                    </div>
                    <p className="synopsys">{film.synopsys}</p>
                </div>
                <div className="film-container__synopsys">
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
                <div className="film__link-button">
                    <Link to={linkToDetails} className="default-btn">See More</Link>
                </div>
            </div>
        </div>
    );
}

export default FilmDetail;