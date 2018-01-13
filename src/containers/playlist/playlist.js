import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//Actions creators
import { toggleFilm, addToWatchlist, removeFromWatchlist, filterFilms } from '../../actions/index';
import { fetchFilm } from '../../actions/async/index';

//Reducers and actions
import { getPlaylist, getPlaylistByFilter, getFilter, getFilm } from '../../reducers'

//Components
import FilmList from '../../components/film-list/film-list';

class PlaylistComponent extends Component {
    componentDidMount() {
        this.fetchFilms();
    }

    render() {
        const { addToWatchlist, removeFromWatchlist, filterPlaylist, ...rest } = this.props;
        return <FilmList 
            {...rest}
            onAddToWatchlist={addToWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
            onFilterPlaylist={filterPlaylist}
         />
    }

    fetchFilms() {
        const { fetchFilm } = this.props;
        fetchFilm('Shutter Island');
        fetchFilm('Django Unchained');
        fetchFilm('Coco');
        fetchFilm('Star Wars: Episode I');
        fetchFilm('Star Wars: Episode II');
        fetchFilm('Star Wars: Episode III');
        fetchFilm('The Lord of the Rings: The fellowship of the ring');
        fetchFilm('The Lord of the Rings: The two towers');
        fetchFilm('The Lord of the Rings: The return of the king');
        fetchFilm('Inception');
        fetchFilm('Captain America: The First Avenger');
        fetchFilm('Captain America: Civil War');
        fetchFilm('Iron Man');
        fetchFilm('Dunkirk');
    }
}

const mapStateToProps = (state) => ({
    playlist: getVisibleFilms(getPlaylist(state), getFilter(state)),
    filter: getFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
    filterPlaylist: filter => {
        dispatch(filterFilms(filter));
    },
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

const getVisibleFilms = (films, filter) => {
    debugger;
    if (filter === 'all') {
        return films;
    }
    return films.filter(it => isSomeGenreInFilter(extractGenresFromFilm(it.genre.replace(/\s/g, "")), filter));
}


const extractGenresFromFilm = (genre) => {
    let i = 0;
    const genres = [];
    let genreExtracted = ""; 
    while(i <= genre.length) {
        if (genre[i] === ',' || i === genre.length) {
            genres.push(genreExtracted);
            genreExtracted = "";
        } else {
            genreExtracted = genreExtracted.concat(genre[i]);
        }
        i++;
    }
    return genres;
}

const isSomeGenreInFilter = (genres, filter) => genres.some(it => it === filter);

const Playlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistComponent));

export default Playlist;