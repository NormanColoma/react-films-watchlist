import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav  = () => {
    return(
        <header className="App-header">
            <h1 className="App-title">WatchList Maker</h1>
            <ul className="navlist">
                <li>
                    <NavLink exact to="/">Films</NavLink>
                </li>
                <li>
                    <NavLink to="/watchlist">Watchlist</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Nav;