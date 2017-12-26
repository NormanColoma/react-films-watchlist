import React from 'react';
import './film.css';

const FilmView = ({ film, onAddToWatchlist, onRemoveFromWatchlist }) => {
    if(!film) {
        return <div>The resource does not exist</div>;
    }
    let input = <input onClick={ () => onAddToWatchlist(film) } type="button" className="default-btn" value="Want to watch" />;
    if (film.inWatchList) {
        input = <input onClick={() => onRemoveFromWatchlist(film)} className="success-btn" type="button" value='Watching'/>;
    }
    return (
        <div className="default-conatiner">
            <img className="default-img" src={film.poster} alt={film.name} />
            <h1 className="default-title">{film.name}<span>({film.releasedDate})</span></h1>
            <div className="film block options">
                <ul>
                    <li>
                        <i className="fas fa-star gold-color"></i>
                        <span>{film.rating}</span>
                    </li>
                </ul>
            </div>
            <div className="film block synopsys">
                <h3 className="left">Synopsys</h3>
                <p className="left">{film.synopsys}</p>
            </div>
            <div className="film block cast">
                <h3 className="left">Cast</h3>
                <p className="left">{film.actors}</p>
            </div>
            <div className="film block cast">
                <h3 className="left">Director</h3>
                <p className="left">{film.director}</p>
            </div>
            <div className="film block actions">
                {input}
            </div>
        </div>
    )
};

export default FilmView;