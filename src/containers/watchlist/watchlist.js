import { connect } from 'react-redux';

//Actions
import { toggleFilm, removeFromWatchlist} from '../../actions/index';

//Selectors 
import { getWatchlist } from '../../selectors';

//Components
import WatchListView from '../../components/watchlist-view/watchlist-view';


const mapStateToProps = (state) => ({
    watchlist: getWatchlist(state)
});

const mapDispatchToProps = (dispatch) => ({
    onRemoveFilm: film => {
        dispatch(toggleFilm(film.id));
        dispatch(removeFromWatchlist(film.id));
    }
});

const Watchlist = connect(
    mapStateToProps,
    mapDispatchToProps
)(WatchListView);

export default Watchlist;