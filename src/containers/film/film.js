import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Actions creators
import { selectFilm, fetchFilmById } from '../../actions/index';

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
        return <FilmView {...this.props}/>;
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
    }
});

const Film = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmComponent));

export default Film;