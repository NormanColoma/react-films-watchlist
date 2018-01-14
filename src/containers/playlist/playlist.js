import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//Actions creators
import { toggleFilm, addToWatchlist, removeFromWatchlist, filterFilms } from '../../actions/index';
import { fetchFilm } from '../../actions/async/index';

//Reducers and actions
import { getPlaylist, getFilter } from '../../reducers'

//Components
import FilmList from '../../components/film-list/film-list';

const ALL_GENRES = 'all';
const COMMA = ',';
const NONE = "";
const PLAYLIST_FILMS = [
    'Shutter Island', 'Django Unchained', 'Coco', 'Star Wars: Episode I', 'Star Wars: Episode II',
    'Star Wars: Episode III', 'The Lord of the Rings: The fellowship of the ring', 'The Lord of the Rings: The two towers',
    'The Lord of the Rings: The return of the king', 'Inception', 'Captain America: The First Avenger',
    'Captain America: Civil War', 'Iron Man', 'Dunkirk'
];

class PlaylistComponent extends Component {
    componentDidMount() {
        const { fetchFilm } = this.props;
        PLAYLIST_FILMS.forEach(film => fetchFilm(film));
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
}

const mapStateToProps = (state, {match: { params : { filter: paramsFilter } }}) => ({
    playlist: getVisibleFilms(getPlaylist(state), paramsFilter, getFilter(state)),
    filter: capitalizeFilter(paramsFilter || getFilter(state))
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

const getVisibleFilms = (films, paramsFilter, stateFilter) => {
    const filter = capitalizeFilter(paramsFilter || stateFilter);
    
    return filter === ALL_GENRES ? films : films.filter(it => isSomeGenreInFilter(it, filter));
}


const extractGenresFromFilm = (genre) => {
    let i = 0;
    const genres = [];
    let genreExtracted = NONE; 

    while(i <= genre.length) {
        if (genre[i] === COMMA || i === genre.length) {
            genres.push(genreExtracted);
            genreExtracted = NONE;
        } else {
            genreExtracted = genreExtracted.concat(genre[i]);
        }
        i++;
    }
    return genres;
}

const isSomeGenreInFilter = (film, filter) => { 
    const genre = film.genre.replace(/\s/g, NONE);
    const genres = extractGenresFromFilm(genre);

    return genres.some(it => it === filter)
}

const capitalizeFilter = (filter) => filter === ALL_GENRES ? filter : filter.charAt(0).toUpperCase() + filter.slice(1);

const Playlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistComponent));

export default Playlist;