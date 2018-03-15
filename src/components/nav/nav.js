import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const renderCounter = (numberOfFilms) => {
    if (numberOfFilms === 0) {
        return <div className="watchlist-counter">{ numberOfFilms }</div>;
    } 
    return <div className="watchlist-counter show">{ numberOfFilms }</div>;
}
 
const Nav  = ({ numberOfFilms }) => {
    return(
        <header className="App-header">
            <h1 className="App-title">Watchlist Maker</h1>
            <ul className="navlist">
                <li>
                    <NavLink exact to="/films">Films</NavLink>
                </li>
                <li>
                    <NavLink to="/watchlist">Watchlist</NavLink>
                    { renderCounter(numberOfFilms) }
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Nav;