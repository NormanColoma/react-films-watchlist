import React from 'react';
import './film-suggestions-list.css';

const FilmSuggestionsList = ({ films, selectedFilm, onMouseOver }) => {
    const list = films.map(it => {
        return <div className="film-suggested" key={it.id} onMouseOver={() => onMouseOver(it.id)}>
            <img className={ selectedFilm.id === it.id ? 'film-suggested__img film-suggested__selected' : 'film-suggested__img' } 
                src={it.poster} />
        </div>;
    });
    return list;
}

export default FilmSuggestionsList;