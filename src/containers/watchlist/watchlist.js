import { connect } from 'react-redux';
import { toggleFilm, removeFromWatchlist} from '../../actions/index';
import { getWatchlist } from '../../reducers';
import WatchListView from '../../components/watchlist-view/watchlist-view';


const mapStateToProps = (state) => ({
    watchlist: getWatchlist(state)
});

const mapDispatchToProps = (dispatch) => ({
    onRemoveFilm: film => {
        dispatch(toggleFilm(film.id)),
        dispatch(removeFromWatchlist(film.id))
    }
});

const Watchlist = connect(
    mapStateToProps,
    mapDispatchToProps
)(WatchListView);

export default Watchlist;