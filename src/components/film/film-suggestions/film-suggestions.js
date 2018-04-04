import React from 'react';
import './film-suggestions.css';
import FilmSuggestionsList from './film-suggestions-list/film-suggestions-list';
import FilmSuggestionsResume from './film-suggestions-resume/film-suggestions-resume';

const FilmSuggestions = ({ films }) => {
    let selectedFilm = films[0];

    if (!selectedFilm) {
        return null;
    }
    
    return (
        <div className="film-suggestions-container">
            <h1>More like this</h1>
            <div className="suggestions-grid">
                <FilmSuggestionsList films={films} selectedFilm={selectedFilm} />
                <FilmSuggestionsResume film={selectedFilm} />
            </div>
        </div>
    )
}

export default FilmSuggestions;