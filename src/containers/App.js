import React, { Component } from 'react';
//import FilmPlaylist from '../components/playlist/playlist';
import WatchList from '../components/watchlist/watchlist';
import Playlist from './playlist/playlist';
import { addFilm, removeFilm } from './add-film-state';
import './App.css';
import '../buttons.css'

class App extends Component {
  handleAddFilmToWatchlist(film) {
    this.setState(addFilm(film));
  }

  handleRemoveFilmFromWatchList(film) {
    this.setState(removeFilm(film));
  }

  render() {
    /*const pendingFilms = this.state.watchlist.length === 0 ? null : <p>You have {this.state.watchlist.length} films pending!!</p>;
    <FilmPlaylist 
    className="App-intro" 
    playlist={this.state.playlist}
    onAddToWatchlist={film => this.handleAddFilmToWatchlist(film)}
    onRemoveFromWatchlist = {film => this.handleRemoveFilmFromWatchList(film)}
    />*/
    return (
      <div>
        <Playlist />
      </div>
    );
  }
}

export default App;
