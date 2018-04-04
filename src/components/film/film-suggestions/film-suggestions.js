import React from 'react';
import './film-suggestions.css';
import FilmSuggestionsList from './film-suggestions-list/film-suggestions-list';
import FilmSuggestionsResume from './film-suggestions-resume/film-suggestions-resume';

const FilmSuggestions = ({ films, selectedFilm, onSelectSuggestedFilm }) => {

    const handleOnMouseOver = (selectedFilmId) => {
        onSelectSuggestedFilm(selectedFilmId);
    }

    if (!selectedFilm && films.length === 0) {
        return null;
    }

    if (!selectedFilm && films) {
        selectedFilm = films[0];
    }

    return (
        <div className="film-suggestions-container">
            <h1>More like this</h1>
            <div className="suggestions-grid">
                <FilmSuggestionsList films={films} selectedFilm={selectedFilm} onMouseOver={handleOnMouseOver} />
                <FilmSuggestionsResume film={selectedFilm} />
            </div>
        </div>
    )
}

export default FilmSuggestions;