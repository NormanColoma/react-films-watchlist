import React from 'react';
import { NavLink } from 'react-router-dom';
import './watchlist-view.css';

import WatchlistFilm from '../watchlist-film/watchlist-film';

const WatchListView = ({ watchlist, onRemoveFilm }) => {
    if (watchlist.length === 0 | !watchlist) {
        return (
            <div>
                <div className="watchlist header">
                    <h1 className="watchlist title">Your Watchlist</h1>
                    <h4 className="watchlist subtitle">{watchlist.length} Titles</h4>
                </div>
                <div>
                    <p className="watchlist empty-list-message">There are no films added to your watchlist yet. Start  <strong><NavLink exact to="/">adding!!</NavLink></strong></p>
                </div>
            </div>
        )
    }
    const films = watchlist.map((film) => {
        return  <li key={film.id}>
            <WatchlistFilm film={film} onRemoveFilm={onRemoveFilm}/>
        </li>
    });

    return (
        <div className="App-container">
            <div className="watchlist header">
                <h1 className="watchlist title">Your Watchlist</h1>
                <h4 className="watchlist subtitle">{watchlist.length} Titles</h4>
            </div>
            <ul className="watchlist films">
                {films}
            </ul>
        </div>
    );
};

export default WatchListView;