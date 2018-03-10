import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav  = ({onClickAuth, authenticated, loading, user}) => {
    let loginButton = null;
    if (!authenticated && !loading) {
        loginButton =  <a className="loginLink" onClick={onClickAuth}>Accede</a>;
    }
    
    if (user) {
        const { photoURL } = user;
        loginButton = <div className="profile"><img src={photoURL} alt="profile img"/></div>;
    }
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
                   {loginButton}
                </li>
            </ul>
        </header>
    );
}

export default Nav;