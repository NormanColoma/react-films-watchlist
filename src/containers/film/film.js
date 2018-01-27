import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Actions creators
import { selectFilm, addToWatchlist, removeFromWatchlist, toggleFilm } from '../../actions/index';
import { fetchFilmById } from '../../actions/async/index';

//Reducers and actions
import { getFilm, filmIsLoading, existsFilm } from '../../reducers'

import FilmView from '../../components/film/film';

class FilmComponent extends Component {
    componentDidMount() {
       const { selectFilm, fetchFilm, match, film, filmInStore } = this.props;

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

    handleAddFilmToWatchlist(film) {
        this.props.addToWatchlist(film);
    }

    handleRemoveFilmFromWatchlist(film) {
        this.props.removeFromWatchlist(film);
    }
}


const mapStateToProps = (state, ownProps) => ({
    film: getFilm(state),
    loading: filmIsLoading(state),
    filmInStore: existsFilm(state, ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    selectFilm: id => {
        dispatch(selectFilm(id))
    },
    fetchFilm: id => {
        dispatch(fetchFilmById(id))
    },
    addToWatchlist: film => {
        dispatch(toggleFilm(film.id));
        dispatch(selectFilm(film.id));
        dispatch(addToWatchlist(film));
    },
    removeFromWatchlist: film => {
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