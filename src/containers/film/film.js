// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Domain
import * as Domain from '../../domain/Film';

//Actions creators
import { selectFilm, addToWatchlist, removeFromWatchlist, toggleFilm } from '../../actions/index';
import { fetchFilmById } from '../../actions/async/index';

//Reducers and actions
import { getFilm, filmIsLoading, existsFilm } from '../../selectors'
import type { State } from '../../reducers/playlist';

//Components
import FilmView from '../../components/film/film';

type Props = {
    selectFilm: function,
    fetchFilm: function,
    addToWatchlist: function,
    removeFromWatchlist: function,
    filmInStore: boolean,
    match: Object,
    film: Domain.Film,
    loading: boolean
};

class FilmComponent extends Component <Props> {
    componentDidMount() {
       const { selectFilm, fetchFilm, match, filmInStore } = this.props;

        if (filmInStore) {
            selectFilm(match.params.id);
        } else {
            fetchFilm(match.params.id);
        }
    }

    render() {
        const { film, loading } = this.props;
        return <FilmView
            film={film}
            loading={loading}
            onAddToWatchlist={film => this.handleAddFilmToWatchlist(film)}  
            onRemoveFromWatchlist={film => this.handleRemoveFilmFromWatchlist(film)}  
        />;
    }

    handleAddFilmToWatchlist(film: Domain.Film) {
        this.props.addToWatchlist(film);
    }

    handleRemoveFilmFromWatchlist(film: Domain.Film) {
        this.props.removeFromWatchlist(film);
    }
}


const mapStateToProps = (state: State, ownProps: Object) => ({
    film: getFilm(state),
    loading: filmIsLoading(state),
    filmInStore: existsFilm(state, ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch: function) => ({
    selectFilm: (id: string) => {
        dispatch(selectFilm(id))
    },
    fetchFilm: (id: string) => {
        dispatch(fetchFilmById(id))
    },
    addToWatchlist: (film: Domain.Film) => {
        dispatch(toggleFilm(film.id));
        dispatch(selectFilm(film.id));
        dispatch(addToWatchlist(film));
    },
    removeFromWatchlist: (film: Domain.Film) => {
        dispatch(toggleFilm(film.id));
        dispatch(selectFilm(film.id));
        dispatch(removeFromWatchlist(film.id));
    }
});

const Film = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmComponent));

export default Film;