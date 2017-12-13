import { connect } from 'react-redux';
//Actions creators
import { toggleFilm, addToWatchlist, removeFromWatchlist } from '../../actions/index';

//Reducers selectors 
import { getPlaylist } from '../../reducers'
//Components
import FilmList from '../../components/film-list/film-list';

const mapStateToProps = (state) => ({
    playlist: getPlaylist(state)
});

const mapDispatchToProps = (dispatch) => ({
    onAddToWatchlist: film => {
        dispatch(toggleFilm(film.id)),
        dispatch(addToWatchlist(film))
    },
    onRemoveFromWatchlist: film => {
        dispatch(toggleFilm(film.id)),
        dispatch(removeFromWatchlist(film.id))
    }
});

const Playlist = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmList);

export default Playlist;