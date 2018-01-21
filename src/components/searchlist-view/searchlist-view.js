import React from 'react';
import './searchlist-view.css';

const SearchlistView = ({ onSearch, posters }) => {

    const handleOnChange = (event) => {
        const { keyCode } = event;
        const term = event.target.value;
        
        if (keyCode === 13 && term.length > 0) {
            onSearch(term);
        }
    }

    return (
        <div className="default-conatiner">
            <p>Search the films you didn't find in playlist</p>
            <input 
                type="text" 
                name="search" 
                placeholder="Search films..." 
                onKeyDown={(event) => handleOnChange(event)} 
            />
            <div className="search-containner">
                <h4 className="results-title">There are {posters.length} matching your search</h4>
            </div>
        </div>
    );
};

export default SearchlistView