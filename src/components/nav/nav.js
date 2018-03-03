import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './nav.css';

const Nav  = ({onClickAuth}) => {
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
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
                <li>
                    <a className="loginLink" onClick={onClickAuth}>Accede</a>
                </li>
            </ul>
        </header>
    );
}

export default Nav;