import { connect } from 'react-redux';

import WatchListView from '../../components/watchlist-view/watchlist-view';


const mapStateToProps = (state) => ({
    watchlist: state.watchlist
});

const Watchlist = connect(
    mapStateToProps,
    null
)(WatchListView);

export default Watchlist;