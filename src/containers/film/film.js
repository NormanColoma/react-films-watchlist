import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Actions creators
import { selectFilm } from '../../actions/index';

//Reducers and actions
import { getFilm } from '../../reducers'

import FilmView from '../../components/film/film';

class FilmComponent extends Component {
    componentDidMount() {
       const { onSelectFilm, match } = this.props;
       onSelectFilm(match.params.id);
    }

    render() {
        return <FilmView {...this.props}/>;
    }
}


const mapStateToProps = (state) => ({
    film: getFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
    onSelectFilm: id => {
        dispatch(selectFilm(id))
    }
});

const Film = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmComponent));

export default Film;