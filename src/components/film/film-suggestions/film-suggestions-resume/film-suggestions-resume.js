import React from 'react';
import './film-suggestions-resume.css';


const FilmSuggestionsResume = ({ film, onClickNext }) => {
    return (
        <div className="film-suggested__container">
            <div className="film-suggested__details">
                <img src={film.poster} />
            </div>
            <div className="film-suggested__info">
                <div className="film-suggested__info-header">
                    <h4>
                        {film.name}
                        <span className="film-suggested__release">({film.releasedDate})</span>
                    </h4>
                    <p className="film-suggested__genres">{film.genre}</p>
                </div>
                <p className="film-suggested__synopsys">{film.synopsys}</p>
                <span className="film-suggested__director"><strong>Director: </strong> {film.director}</span>
            </div>
            <div className="film-suggested__actions">
                <a className="green-button" onClick={onClickNext}>
                    Next
                    <span>>></span>
                </a>
            </div>
        </div>
    );
}

export default FilmSuggestionsResume;