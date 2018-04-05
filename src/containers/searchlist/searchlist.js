// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

//Domain
import PosterFilm from '../../domain/PosterFilm';
import type { State } from '../../reducers/searchlist';
//Actions
import { fetchFilmById } from '../../actions/async/index';
import { fetchFilmsByTerm } from '../../actions/async/index';

//Selectors 
import { getSearchlist } from '../../selectors';

//Components
import SearchlistView from '../../components/searchlist-view/searchlist-view';
import { clearSearchlist } from '../../actions';

type Props = {
    posters: PosterFilm,
    searchFilms: Function,
    history: Object,
    searchFilms: Function,
    clearSearch: Function
};

class SearchlistComponent extends Component <Props> {

    componentDidMount() {
        const { clearSearch } = this.props;
        clearSearch();
    }

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

const mapDispatchToProps = (dispatch: Function) => ({
    searchFilms: (term: string) => {
        dispatch(fetchFilmsByTerm(term));
    },
    fetchFilm: (id: string) => {
        dispatch(fetchFilmById(id))
    },
    clearSearch: () => {
        dispatch(clearSearchlist())
    }
});

const Searchlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchlistComponent));

export default Searchlist;