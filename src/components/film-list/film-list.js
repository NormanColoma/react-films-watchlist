import React from 'react';
import { Link } from 'react-router-dom';
import FilmDetail from './film-detail/film-detail';
import './film-list.css';

const FilmList = ({ playlist, onAddToWatchlist, onRemoveFromWatchlist }) => {
    const films = playlist.map((film) => {

        let input = <input className="default-btn" type="button" value='See more'/>;
        let onFavFilm = onAddToWatchlist;
        const linkToDetails = `/films/${film.id}`;
        if(film.inWatchList) {
            onFavFilm = onRemoveFromWatchlist;
        }

        return <li key={film.id}>
            <FilmDetail film={film} onFavFilm={onFavFilm} />
            <Link to={linkToDetails} className="default-btn">See More</Link>
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