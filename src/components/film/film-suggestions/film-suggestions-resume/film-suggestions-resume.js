import React from 'react';
import './film-suggestions-resume.css';


const FilmSuggestionsResume = ({ film }) => {
    return (
        <div className="film-suggested__container">
            <div className="film-suggested__details">
                <img src={film.poster} />
            </div>
            <div className="film-suggested__info">
                <h4>
                    {film.name}
                    <span className="film-suggested__release">({film.releasedDate})</span>
                </h4>
                <p className="film-suggested__genres">{film.genre}</p>
                <p className="film-suggested__synopsys">{film.synopsys}</p>
            </div>
        </div>
    );
}

export default FilmSuggestionsResume;