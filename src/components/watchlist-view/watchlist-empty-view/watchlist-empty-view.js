import React from 'react';
import { NavLink } from 'react-router-dom';

import './watchlist-empty-view.css';

const WatchlistEmptyView = () => {
    return (
        <div>
            <div className="watchlist header">
                <h1 className="watchlist title">Your Watchlist</h1>
                <h4 className="watchlist subtitle">0 Titles</h4>
            </div>
            <div>
                <p className="watchlist__empty-message">There are no films added to your watchlist yet. Start
                    <strong><NavLink exact to="/">adding!!</NavLink></strong>
                </p>
            </div>
        </div>
    )
};

export default WatchlistEmptyView;