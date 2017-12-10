import { connect } from 'react-redux';
import FilmList from '../../components/film-list/film-list';

const mapStateToProps = (state) => ({
    playlist: state.playlist
});

const Playlist = connect(
    mapStateToProps,
    null
)(FilmList);

export default Playlist;