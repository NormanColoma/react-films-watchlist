// @flow
import React from 'react';
import './watchlist-view.css';

import WatchlistFilm from '../watchlist-film/watchlist-film';
import WatchlistEmptyView from './watchlist-empty-view/watchlist-empty-view';
import Film from '../../domain/Film';

type Props = {
    watchlist: Array<Film>,
    onRemoveFilm: Function
};

const WatchListView = ({ watchlist, onRemoveFilm }: Props) => {
    if (watchlist.length === 0 ||  !watchlist) {
        return <WatchlistEmptyView />
    }
    
    const films: Array<Object> = watchlist.map((film) => {
        return <li key={film.id}>
            <WatchlistFilm film={film} onRemoveFilm={onRemoveFilm} />
        </li>
    });

    return (
        <div className="watchlist-container">
            <div className="watchlist header">
                <h1 className="watchlist title">Your Watchlist</h1>
                <h4 className="watchlist subtitle">{watchlist.length} Titles</h4>
            </div>
            <div className="watchlist__films">
                <ul className="watchlist films">
                    {films}
                </ul>
            </div>
        </div>
    );
};

export default WatchListView;