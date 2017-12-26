import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Actions creators
import { selectFilm, fetchFilmById, addToWatchlist, removeFromWatchlist, toggleFilm } from '../../actions/index';

//Reducers and actions
import { getFilm } from '../../reducers'

import FilmView from '../../components/film/film';

class FilmComponent extends Component {
    componentDidMount() {
       const { selectFilm, fetchFilm, match, film } = this.props;
       if(!film) {
        fetchFilm(match.params.id);
       } else {
        selectFilm(match.params.id);
       }
    }

    render() {
        const { film } = this.props;
        return <FilmView
            film={film}
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


const mapStateToProps = (state) => ({
    film: getFilm(state)
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
    },
});

const Film = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmComponent));

export default Film;