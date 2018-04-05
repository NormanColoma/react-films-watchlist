import React from 'react';
import './film-suggestions-list.css';

const FilmSuggestionsList = ({ films, selectedFilm, onMouseOver }) => {
    const list = films.map(it => {
        const selectedClasses = 'film-suggested__img film-suggested__selected';
        
        return <div className="film-suggested" key={it.id} onMouseOver={() => onMouseOver(it.id)}>
            <img className={ selectedFilm.id === it.id ?  selectedClasses : 'film-suggested__img' } 
                alt={it.name}
                src={it.poster} />
        </div>;
    });
    return list;
}

export default FilmSuggestionsList;