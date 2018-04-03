// @flow
import React from 'react';
import Film from '../../domain/Film';
import './film.css';
import FilmReviews from './film-reviews/film-reviews';

type Props = {
    film: Film,
    loading: boolean,
    onAddToWatchlist: Function,
    onRemoveFromWatchlist: Function
};

const FilmView = ({ film, loading, onAddToWatchlist, onRemoveFromWatchlist }: Props) => {
    if (loading) {
        return <div>
            <h1 className="not-found-message">Fetching film...</h1>
        </div>;
    }
    if (!film) {
        return <div>
            <h1 className="not-found-message">The resource does not exist</h1>
        </div>;
    }
    let input = <input onClick={() => onAddToWatchlist(film)} type="button" className="default-rounded-btn" value="Want to watch" />;
    if (film.inWatchList) {
        input = <input onClick={() => onRemoveFromWatchlist(film)} className="default-rounded-success-btn" type="button" value='Watching' />;
    }
    return (
        <div className="default-conatiner">
            <div className="film-container__inner">
                <div className="film-container__img">
                    <img className="default-img" src={film.poster} alt={film.name} />
                </div>
                <div className="film-container__options">
                    <div className="film-container__title">
                        <h1 className="default-title">{film.name}<span>({film.releasedDate})</span></h1>
                        <ul>
                            <li>
                                <i className="fas fa-star gold-color"></i>
                                <span>{film.rating}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="film-container__synopsys">
                        <h3>Synopsys</h3>
                        <p>{film.synopsys}</p>
                    </div>
                    <div className="film-container__cast">
                        <h3>Cast</h3>
                        <p>{film.actors}</p>
                    </div>
                    <div className="film-container__cast">
                        <h3>Director</h3>
                        <p>{film.director}</p>
                    </div>
                    <div className="film-container__actions">
                        {input}
                    </div>
                </div>
                <FilmReviews />
            </div>
        </div>
    )
};

export default FilmView;