import React from 'react';
import './searchlist-view.css';

const SearchlistView = ({ onSearch, posters }) => {
    const handleOnChange = (event) => {
        const { keyCode } = event;
        const term = event.target.value;
        
        if (keyCode === 13) {
            onSearch(term);
        }
    }

    const posterFilms = posters.map(it => {
        return <li key={it.id}>
                    <div className="search-rsult-container">
                        <div className="search-result-inner-container">
                            <h5>{it.name}</h5>
                            <img src={it.poster} />
                            <div className="search-result-title">
                                
                            </div>
                        </div>
                        <div className="search-result-actions-container">
                            <i className="fas fa-film"></i>
                            <i className="fas fa-heart"></i>
                            <p> Was released in {it.releasedDate}</p>   
                        </div>
                    </div>
                </li>
    });

    return (
        <div className="default-conatiner">
            <input 
                type="text" 
                name="search" 
                placeholder="Search films..." 
                onKeyDown={(event) => handleOnChange(event)} 
            />
            <div className="search-containner">
                <p className="results-title">There are <strong>{posters.length} results</strong> matching your search</p>
                <div>
                    <ul className="search-result-list">
                        {posterFilms}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchlistView