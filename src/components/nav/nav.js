import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav  = () => {
    return(
        <header className="App-header">
            <h1 className="App-title">Watchlist Maker</h1>
            <ul className="navlist">
                <li>
                    <NavLink exact to="/films">Films</NavLink>
                </li>
                <li>
                    <NavLink to="/watchlist">Watchlist</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Nav;