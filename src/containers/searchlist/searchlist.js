// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

//Domain
import PosterFilm from '../../domain/PosterFilm';
import type { State } from '../../reducers/searchlist';
//Actions
import { fetchFilmById, fetchFilm } from '../../actions/async/index';
import { fetchFilmsByTerm } from '../../actions/async/index';

//Selectors 
import { getSearchlist } from '../../selectors';

//Components
import SearchlistView from '../../components/searchlist-view/searchlist-view';

type Props = {
    posters: PosterFilm,
    searchFilms: function,
    history: Object,
    searchFilms: function,
};

class SearchlistComponent extends Component <Props> {
    render () {
        const { posters } = this.props;

        return <SearchlistView 
                onSearch={term => this.handleOnSearch(term)}
                onFilmClicked={(filmId) => this.navigateToDetails(filmId)}
                posters={posters}
            />;
    }

    handleOnSearch(term: string) {
        const { searchFilms } = this.props;
        searchFilms(term);
    }

    navigateToDetails(filmId) {
        const { history } = this.props;
        const linkToDetails = `/films/${filmId}`;
        
        history.push(linkToDetails);
    }
}

const mapStateToProps = (state: State) => ({
    posters: getSearchlist(state)
});

const mapDispatchToProps = (dispatch: function) => ({
    searchFilms: (term: string) => {
        dispatch(fetchFilmsByTerm(term));
    },
    fetchFilm: (id: string) => {
        dispatch(fetchFilmById(id))
    }
});

const Searchlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchlistComponent));

export default Searchlist;