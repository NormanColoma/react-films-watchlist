import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import SearchlistView from '../../components/searchlist-view/searchlist-view';
import { fetchFilmsByTerm } from '../../actions/async/index';

//Reducers and actions
import { getSearchlist } from '../../reducers'
import { fetchFilmById } from '../../actions/async/index';

class SearchlistComponent extends Component {
    render () {
        const { posters } = this.props;

        return <SearchlistView 
                onSearch={term => this.handleOnSearch(term)}
                onFilmClicked={(filmId) => this.navigateToDetails(filmId)}
                posters={posters}
            />;
    }

    handleOnSearch(term) {
        const { searchFilms } = this.props;
        searchFilms(term);
    }

    navigateToDetails(filmId) {
        const { history } = this.props;
        const linkToDetails = `/films/${filmId}`;
        
        history.push(linkToDetails);
    }
}

const mapStateToProps = (state) => ({
    posters: getSearchlist(state)
});

const mapDispatchToProps = (dispatch) => ({
    searchFilms: term => {
        dispatch(fetchFilmsByTerm(term));
    },
    fetchFilm: id => {
        dispatch(fetchFilmById(id))
    }
});

const Searchlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchlistComponent));

export default Searchlist;