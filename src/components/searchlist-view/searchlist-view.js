// @flow
import React from 'react';
import './searchlist-view.css';
import PosterFilm from '../../domain/PosterFilm';
import SuggestionInputSearch from 'suggestion-react-input-search';

type Props = {
    onSearch: Function,
    onFilmClicked: Function,
    posters: Array<PosterFilm>
};

const SearchlistView = ({ onSearch, onFilmClicked, posters }: Props) => {
    const handleOnChange: Function = (term: string) => {
        onSearch(term);
    }

    const handleOnClick = (poster: PosterFilm) => {
        onFilmClicked(poster.id);
    }

    const posterFilms = posters.map(it => {
        return <li key={it.id} onClick={() => handleOnClick(it)}>
                    <div className="search-rsult-container">
                        <div className="search-result-inner-container">
                            <h5>{it.name}</h5>
                            <img src={it.poster} alt="film-poster"/>
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
           
            <SuggestionInputSearch 
                onSubmitFunction={handleOnChange} 
                persistent={true}
                placeholder={'Search films...'}
                inputPosition={'center'} 
            />
            <div className="search-containner">
                <p className="results-title">There are <strong>{posters.length} results</strong> matching your search</p>
                <div className="search-container__list">
                    <ul className="search-result-list">
                        {posterFilms}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchlistView