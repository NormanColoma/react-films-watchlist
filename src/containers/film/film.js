// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Domain
import * as Domain from '../../domain/Film';

//Actions creators
import { selectFilm, addToWatchlist, removeFromWatchlist, toggleFilm, selectSuggestedFilm } from '../../actions/index';
import { fetchFilmById } from '../../actions/async/index';

//Reducers and actions
import { getFilm, filmIsLoading, existsFilm, getSuggestedFilms, getSelectedFilmSuggested } from '../../selectors'
import type { State } from '../../reducers/playlist';

//Components
import FilmView from '../../components/film/film';

type Props = {
    selectFilm: Function,
    fetchFilm: Function,
    addToWatchlist: Function,
    removeFromWatchlist: Function,
    filmInStore: boolean,
    match: Object,
    film: Domain.Film,
    loading: boolean
};

class FilmComponent extends Component <Props> {
    componentDidMount() {
       const { selectFilm, fetchFilm, match, filmInStore, filmsSuggested } = this.props;

        if (filmInStore) {
            selectFilm(match.params.id);
        } else {
            fetchFilm(match.params.id);
        }
    }

    render() {
        const { film, filmsSuggested, selectedFilm, loading } = this.props;

        return <FilmView
            film={film}
            filmsSuggested={filmsSuggested}
            selectedFilm={selectedFilm}
            loading={loading}
            onAddToWatchlist={film => this.handleAddFilmToWatchlist(film)}  
            onRemoveFromWatchlist={film => this.handleRemoveFilmFromWatchlist(film)}  
            onSelectSuggestedFilm={id => this.handleSelectSuggestedFilm(id)}  
        />;
    }

    handleAddFilmToWatchlist(film: Domain.Film) {
        this.props.addToWatchlist(film);
    }

    handleRemoveFilmFromWatchlist(film: Domain.Film) {
        this.props.removeFromWatchlist(film);
    }

    handleSelectSuggestedFilm(id: string) {
        this.props.selectSuggestedFilm(id);
    }
}


const mapStateToProps = (state: State, ownProps: Object) => ({
    film: getFilm(state),
    loading: filmIsLoading(state),
    filmInStore: existsFilm(state, ownProps.match.params.id),
    filmsSuggested: getSuggestedFilms(state, state),
    selectedFilm: getSelectedFilmSuggested(state)
});

const mapDispatchToProps = (dispatch: Function) => ({
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
    },
    selectSuggestedFilm: (id: string) => {
        dispatch(selectSuggestedFilm(id));
    }
});

const Film = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmComponent));

export default Film;