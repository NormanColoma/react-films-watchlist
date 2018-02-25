// @flow
import { connect } from 'react-redux';

//Domain
import Film from '../../domain/Film';

//Actions
import { toggleFilm, removeFromWatchlist} from '../../actions/index';

//Selectors 
import { getWatchlist } from '../../selectors';

//Components
import WatchListView from '../../components/watchlist-view/watchlist-view';


const mapStateToProps = (state: Object) => ({
    watchlist: getWatchlist(state)
});

const mapDispatchToProps = (dispatch: Function) => ({
    onRemoveFilm: (film: Film) => {
        dispatch(toggleFilm(film.id));
        dispatch(removeFromWatchlist(film.id));
    }
});

const Watchlist = connect(
    mapStateToProps,
    mapDispatchToProps
)(WatchListView);

export default Watchlist;