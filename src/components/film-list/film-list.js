import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import FilmDetail from './film-detail/film-detail';
import Film from '../film/film';
import './film-list.css';

const FilmList = ({ playlist, onAddToWatchlist, onRemoveFromWatchlist, match }) => {
    const films = playlist.map((film) => {
        const onFavFilm = film.inWatchList ? onRemoveFromWatchlist : onAddToWatchlist;
        const linkToDetails = `/films/${film.id}`;

        return <li key={film.id}>
            <FilmDetail film={film} onFavFilm={onFavFilm} />
            <Link to={linkToDetails} className="default-btn">See More</Link>
        </li>;
    });

    return (
        <div>
           <Switch>
                <Route exact path="/films" render={() => (
                    <ul className="playlist">
                        {films}
                    </ul>
                )} />
                <Route path="/films/:id" component={Film} />
           </Switch>
        </div>
    );
};

export default FilmList;