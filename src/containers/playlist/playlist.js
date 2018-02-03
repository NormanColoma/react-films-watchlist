import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//Actions creators
import { toggleFilm, addToWatchlist, removeFromWatchlist } from '../../actions/index';
import { fetchFilm } from '../../actions/async/index';

//Selectors
import { getPlaylist, getFilter } from '../../selectors';

//Components
import FilmList from '../../components/film-list/film-list';

const ALL_GENRES = 'all';
const ALL_GENRES_LITERAL = 'All Genres';
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
        const { addToWatchlist, removeFromWatchlist, ...rest } = this.props;
        return <FilmList 
            {...rest}
            onAddToWatchlist={addToWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
            onFilterPlaylist={genre => this.navigateToDetails(genre)}
         />
    }

    navigateToDetails(genreSelected) {
        const { history } = this.props;
        const genre = genreSelected === ALL_GENRES_LITERAL ? ALL_GENRES : genreSelected;
        const linkToDetails = `/films/genre/${genre.toLowerCase()}`;
        
        history.push(linkToDetails);
    }
}

const mapStateToProps = (state, {match: { params : { filter: paramsFilter } }}) => ({
    playlist: getVisibleFilms(getPlaylist(state), paramsFilter, getFilter(state)),
    filter: capitalizeFilter(paramsFilter || getFilter(state))
});

const mapDispatchToProps = (dispatch) => ({
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
    const filter = paramsFilter || stateFilter;
    
    return (filter === ALL_GENRES || filter === ALL_GENRES_LITERAL) ? films : films.filter(it => isSomeGenreInFilter(it, filter));
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
    const genres = extractGenresFromFilm(genre.toLowerCase());

    return genres.some(it => it === filter)
}

const capitalizeFilter = (filter) => filter === ALL_GENRES ? ALL_GENRES_LITERAL : filter.charAt(0).toUpperCase() + filter.slice(1);

const Playlist = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistComponent));

export default Playlist;