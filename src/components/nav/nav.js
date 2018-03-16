import React from 'react';
import { NavLink } from 'react-router-dom';

//Components and styles
import Counter from './counter/counter';
import './nav.css';

const Nav  = ({ numberOfFilms }) => {
    return(
        <header className="App-header">
            <h1 className="App-title">Watchlist Maker</h1>
            <ul className="navlist">
                <li>
                    <NavLink strict to="/films">Films</NavLink>
                </li>
                <li>
                    <NavLink strict to="/watchlist">Watchlist</NavLink>
                    <Counter numberOfFilms={numberOfFilms} />
                </li>
                <li>
                    <NavLink strict to="/search">Search</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Nav;