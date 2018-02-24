// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Domain
import Film from '../../domain/Film';

//Actions creators
import { toggleFilm, addToWatchlist, removeFromWatchlist } from '../../actions/index';
import { fetchFilm } from '../../actions/async/index';
import type { State } from '../../reducers/playlist';

//Selectors
import { getSelectedFilter, getVisibleFilms } from '../../selectors';

//Components
import FilmList from '../../components/film-list/film-list';

const ALL_GENRES: string = 'all';
const ALL_GENRES_LITERAL: string = 'All Genres';
const PLAYLIST_FILMS: Array<string> = [
    'Shutter Island', 'Django Unchained', 'Coco', 'Star Wars: Episode I', 'Star Wars: Episode II',
    'Star Wars: Episode III', 'The Lord of the Rings: The fellowship of the ring', 'The Lord of the Rings: The two towers',
    'The Lord of the Rings: The return of the king', 'Inception', 'Captain America: The First Avenger',
    'Captain America: Civil War', 'Iron Man', 'Dunkirk'
];

type Props = {
    fetchFilm: function,
    addToWatchlist: function,
    removeFromWatchlist: function,
    history: Object,

}

class PlaylistComponent extends Component <Props> {
    componentDidMount() {
        const { fetchFilm } = this.props;
        PLAYLIST_FILMS.forEach(film => fetchFilm(film));
    }

    render() {
        const { addToWatchlist, removeFromWatchlist, ...rest } = this.props;
        //$FlowFixMe
        return <FilmList 
            {...rest}
            onAddToWatchlist={addToWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
            onFilterPlaylist={genre => this.navigateToDetails(genre)}
         />
    }

    navigateToDetails(genreSelected: string) {
        const { history } = this.props;
        const genre = genreSelected === ALL_GENRES_LITERAL ? ALL_GENRES : genreSelected;
        const linkToDetails = `/films/genre/${genre.toLowerCase()}`;
        
        history.push(linkToDetails);
    }
}

const mapStateToProps = (state: State, {match: { params : { filter: paramsFilter } }}: Object) => ({
    playlist: getVisibleFilms(state, paramsFilter),
    filter: capitalizeFilter(paramsFilter || getSelectedFilter(state))
});

const mapDispatchToProps = (dispatch: function) => ({
    addToWatchlist: (film: Film) => {
        dispatch(toggleFilm(film.id));
        dispatch(addToWatchlist(film));
    },
    removeFromWatchlist: (film: Film) => {
        dispatch(toggleFilm(film.id));
        dispatch(removeFromWatchlist(film.id));
    },
    fetchFilm: (title: string) => {
        dispatch(fetchFilm(title))
    }
});

const capitalizeFilter = (filter: Object) => filter === ALL_GENRES ? ALL_GENRES_LITERAL : filter.charAt(0).toUpperCase() + filter.slice(1);

const Playlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistComponent));

export default Playlist;