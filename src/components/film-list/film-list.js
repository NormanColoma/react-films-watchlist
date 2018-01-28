import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilmDetail from './film-detail/film-detail';
import Film from '../../containers/film/film';
import FilmFilter from './film-filter/film-filter';
import './film-list.css';

const FilmList = ({ playlist, onAddToWatchlist, onRemoveFromWatchlist, onFilterPlaylist, filter, match }) => {
    const films = playlist.map((film) => {
        const onFavFilm = film.inWatchList ? onRemoveFromWatchlist : onAddToWatchlist;

        return <li key={film.id}>
            <FilmDetail film={film} onFavFilm={onFavFilm} />
        </li>;
    });

    const handleOnFilter = (event) => {
        onFilterPlaylist(event.target.id);
    }

    return (
        <div>
           <Switch>
                <Route exact path={`${match.url}`} render={() => (
                    <div className="playlist-container">
                        <div className="filter-box">
                            <FilmFilter onFilterSelected={handleOnFilter} selectedFilter={filter}/>
                        </div>
                        <ul className="playlist">
                            {films}
                        </ul>
                    </div>
                )} />
                <Route path={`${match.url}/:id`}component={Film} />
           </Switch>
        </div>
    );
};

export default FilmList;