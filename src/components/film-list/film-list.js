// @flow
import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './film-list.css';

const FilmFilter = lazy(() => import('./film-filter/film-filter'));
const Film = lazy(() => import('../../containers/film/film'));
const FilmDetail = lazy(() => import('./film-detail/film-detail'));

type Props = {
    playlist: Array<Object>,
    filter: string,
    match: Object,
    onAddToWatchlist: Function,
    onRemoveFromWatchlist: Function,
    onFilterPlaylist: Function
};

const FilmList = ({ playlist, onAddToWatchlist, onRemoveFromWatchlist, onFilterPlaylist, filter, match }: Props) => {
    const films = playlist.map((film) => {
        const onFavFilm = film.inWatchList ? onRemoveFromWatchlist : onAddToWatchlist;

        return <li key={film.id}>
            <FilmDetail film={film} onFavFilm={onFavFilm} />
        </li>;
    });

    const handleOnFilter = (event: Object) => {
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
                <Route path={`${match.url}/:id`} component={Film} />
           </Switch>
        </div>
    );
};

export default FilmList;