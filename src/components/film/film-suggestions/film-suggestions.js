import React from 'react';
import './film-suggestions.css';

const renderSuggestedFilm = (film) => {
    return (<div className="film-suggested">
        <img className="film-suggested__img" src={film.poster} />
    </div>);
}

const FilmSuggestions = ({ films }) => {
    const suggestedFilms = films.map(it => renderSuggestedFilm(it));

    return (
        <div className="film-suggestions-container">
            <h1>More like this</h1>
            <div className="suggestions-grid">
                {suggestedFilms}
                <div className="film-suggested__details">
                    <img src="https://ia.media-imdb.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" />
                </div>
                <div className="film-suggested__info">
                    <h4>Star Wars: Episode I <span>(2018)</span></h4>
                    <p className="film-suggested__genres">Drama, Action, Thriller</p>
                    <p className="film-suggested__synopsys">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
                        ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
                        (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló
                         de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que
                          tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al
                           original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian
                            pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus
                             PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    )
}

export default FilmSuggestions;