import React from 'react';
import FilmDetail from './film-detail/film-detail';
import './film-list.css';

const FilmList = ({ playlist, onAddToWatchlist, onRemoveFromWatchlist }) => {
    debugger;
    const films = playlist.map((film) => {

        let input = <input onClick={() => onAddToWatchlist(film)} className="default-btn" type="button" value='Want to watch'/>;
        if(film.inWatchList) {
            input = <input onClick={() => onRemoveFromWatchlist(film)} className="success-btn" type="button" value='Watching'/>
        }

        return <li key={film.id}>
            <FilmDetail film={film} />
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