import React from 'react';
import './film-suggestions.css';
import FilmSuggestionsList from './film-suggestions-list/film-suggestions-list';
import FilmSuggestionsResume from './film-suggestions-resume/film-suggestions-resume'; 

const FilmSuggestions = ({ films, selectedFilm, onSelectSuggestedFilm }) => {

    const handleOnMouseOver = (selectedFilmId) => {
        onSelectSuggestedFilm(selectedFilmId);
    }

    const handleOnClickNext = () => {
        const lastFilmIndex = films.length - 1;
        const firstFilmIndex = 0;
        const currentFilmIndex = films.findIndex(it => it.id === selectedFilm.id);
        const nextFilmIndex = currentFilmIndex === lastFilmIndex ? firstFilmIndex : currentFilmIndex + 1;
        const filmId = films[nextFilmIndex].id;

        onSelectSuggestedFilm(filmId);
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
                <FilmSuggestionsResume film={selectedFilm} onClickNext={handleOnClickNext}/>
            </div>
        </div>
    )
}

export default FilmSuggestions;