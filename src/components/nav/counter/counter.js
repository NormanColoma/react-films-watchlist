import React from 'react';
import './counter.css';

const Counter = ({ numberOfFilms }) => {
    const counterClass = numberOfFilms === 0 ? 'watchlist-counter' : 'watchlist-counter show'
    return <div className={counterClass}>{ numberOfFilms }</div>;
}

export default Counter;