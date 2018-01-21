import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchlistView from '../../components/searchlist-view/searchlist-view';
import { fetchFilmsByTerm } from '../../actions/async/index';

//Reducers and actions
import { getSearchlist } from '../../reducers'

class SearchlistComponent extends Component {
    render () {
        const { posters } = this.props;
        return <SearchlistView 
                onSearch={term => this.handleOnSearch(term)}
                posters={posters}
            />;
    }

    handleOnSearch(term) {
        const { searchFilms } = this.props;
        searchFilms(term);
    }
}

const mapStateToProps = (state) => ({
    posters: getSearchlist(state)
});

const mapDispatchToProps = (dispatch) => ({
    searchFilms: term => {
        dispatch(fetchFilmsByTerm(term));
    }
});

const Searchlist = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchlistComponent);

export default Searchlist;