import React from 'react';

const WatchListView = ({ watchlist }) => {
    return (
        <div>
            <h1>This is the WatchList</h1>
            <p>Currently there are {watchlist.length} films added to your watchlist.</p>
        </div>
    );
};

export default WatchListView;