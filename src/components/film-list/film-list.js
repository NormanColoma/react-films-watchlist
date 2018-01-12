import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import FilmDetail from './film-detail/film-detail';
import Film from '../../containers/film/film';
import './film-list.css';

const FilmList = ({ playlist, onAddToWatchlist, onRemoveFromWatchlist, onFilterPlaylist, match }) => {
    const films = playlist.map((film) => {
        const onFavFilm = film.inWatchList ? onRemoveFromWatchlist : onAddToWatchlist;
        const linkToDetails = `/films/${film.id}`;

        return <li key={film.id}>
            <FilmDetail film={film} onFavFilm={onFavFilm} />
            <Link to={linkToDetails} className="default-btn">See More</Link>
        </li>;
    });

    const handleOnFilter = (event) => {
        onFilterPlaylist(event);
    }

    return (
        <div>
           <Switch>
                <Route exact path={`${match.url}`} render={() => (
                    <div className="playlist-container">
                        <div className="filter-box">
                            <select onChange={(event) => handleOnFilter(event.target.value)}>
                                <option value="all">Filter by genre</option>
                                <option value="all">All</option>
                                <option value="Drama">Drama</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Action">Action</option>
                                <option value="Animation">Animation</option>
                            </select>
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