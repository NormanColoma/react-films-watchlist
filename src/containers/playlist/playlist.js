import { connect } from 'react-redux';
import FilmList from '../../components/film-list/film-list';
import { toggleFilm } from '../../actions/index';

const mapStateToProps = (state) => ({
    playlist: state.playlist
});

const mapDispatchToProps = (dispatch) => ({
    onAddToWatchlist: film => {
        dispatch(toggleFilm(film.id))
    },
    onRemoveFromWatchlist: film => {
        dispatch(toggleFilm(film.id))
    }
});

const Playlist = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmList);

export default Playlist;