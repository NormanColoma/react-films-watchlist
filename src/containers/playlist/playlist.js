// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Domain
import Film from '../../domain/Film';

//Actions creators
import { toggleFilm, addToWatchlist, removeFromWatchlist, loadPlaylist } from '../../actions/index';
import { fetchFilms } from '../../actions/async/index';
import type { State } from '../../reducers/playlist';

//Selectors
import { getSelectedFilter, getVisibleFilms, filmIsLoading } from '../../selectors';

//Components
import FilmList from '../../components/film-list/film-list';

const ALL_GENRES: string = 'all';
const ALL_GENRES_LITERAL: string = 'All Genres';

type Props = {
    loadPlaylist: Function,
    addToWatchlist: Function,
    removeFromWatchlist: Function,
    loading: boolean
};

class PlaylistComponent extends Component <Props> {
    componentDidMount() {
        const { loadPlaylist, playlist } = this.props;
        if (playlist.length === 0) {
            loadPlaylist();
        }
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
    loading: filmIsLoading(state),
    filter: capitalizeFilter(paramsFilter || getSelectedFilter(state))
});

const mapDispatchToProps = (dispatch: Function) => ({
    addToWatchlist: (film: Film) => {
        dispatch(toggleFilm(film.id));
        dispatch(addToWatchlist(film));
    },
    removeFromWatchlist: (film: Film) => {
        dispatch(toggleFilm(film.id));
        dispatch(removeFromWatchlist(film.id));
    },
    loadPlaylist: () => {
        dispatch(loadPlaylist());
        dispatch(fetchFilms());
    }
});

const capitalizeFilter = (filter: Object) => filter === ALL_GENRES ? ALL_GENRES_LITERAL : filter.charAt(0).toUpperCase() + filter.slice(1);

const Playlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistComponent));

export default Playlist;