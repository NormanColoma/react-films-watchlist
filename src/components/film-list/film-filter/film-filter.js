import React from 'react';
import './film-filter.css';

const FilmFilter =({onFilterSelected, selectedFilter}) => {
    const genres = ['Drama', 'Mystery', 'Thriller', 'Adventure', 'Fantasy', 'Action', 'Animation'];
    const filterOptions = genres.map(genre => <option value={genre}>{genre}</option>);

    return (
        <select onChange={onFilterSelected} value={selectedFilter} className="select-filter">
            <option value="all">Filter by genre</option>
            <option value="all">All</option>
            {filterOptions}
        </select>
    );
};

export default FilmFilter;