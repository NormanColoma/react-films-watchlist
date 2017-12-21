import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//Actions creators
import { toggleFilm, addToWatchlist, removeFromWatchlist, fetchFilm } from '../../actions/index';

//Reducers and actions
import { getPlaylist } from '../../reducers'

//Components
import FilmList from '../../components/film-list/film-list';

class PlaylistComponent extends Component {
    componentDidMount() {
        this.fetchFilms();
    }

    render() {
        const { addToWatchlist, removeFromWatchlist, ...rest } = this.props;
        return <FilmList 
            {...rest}
            onAddToWatchlist={addToWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
         />
    }

    fetchFilms() {
        const { fetchFilm } = this.props;
        fetchFilm('Shutter Island');
        fetchFilm('Django Unchained');
        fetchFilm('Coco');
        fetchFilm('Star Wars: Episode III');
    }
}

const mapStateToProps = (state) => ({
    playlist: getPlaylist(state)
});

const mapDispatchToProps = (dispatch) => ({
    addToWatchlist: film => {
        dispatch(toggleFilm(film.id));
        dispatch(addToWatchlist(film));
    },
    removeFromWatchlist: film => {
        dispatch(toggleFilm(film.id));
        dispatch(removeFromWatchlist(film.id));
    },
    fetchFilm: title => {
        dispatch(fetchFilm(title))
    }
});

const Playlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistComponent));

export default Playlist;