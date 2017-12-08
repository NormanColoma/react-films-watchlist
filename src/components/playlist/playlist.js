import React from 'react';
import FilmDetail from './playlist-film-detail/film-detail';
import './playlist.css';

const FilmPlaylist = ({ playlist, onAddToWatchlist, onRemoveFromWatchlist }) => {
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

export default FilmPlaylist;