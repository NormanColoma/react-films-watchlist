import React from 'react';
import FilmDetail from './film-detail/film-detail';
import './film-list.css';

const FilmList = ({ playlist, onAddToWatchlist, onRemoveFromWatchlist }) => {
    const films = playlist.map((film) => {

        let input = <input className="default-btn" type="button" value='See more'/>;
        let onFavFilm = onAddToWatchlist;
        if(film.inWatchList) {
            onFavFilm = onRemoveFromWatchlist;
        }

        return <li key={film.id}>
            <FilmDetail film={film} onFavFilm={onFavFilm} />
            {input}
        </li>;
    });

    return (
        <div>
           <ul className="playlist">
                {films}
           </ul>
        </div>
    );
};

export default FilmList;