// @flow
import { TOGGLE_FILM, ADD_TO_PLAYLIST, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, SELECT_FILM, 
  LOADING_FILM, FILTER_FILMS, ADD_TO_SEARCHLIST, LOAD_PLAYLIST, LOAD_PLAYLIST_COMPLETE, USER_AUTHENTICATED, TOGGLE_CHECK_AUTHENTICATION } from './types';
import Film from '../domain/Film';
import PosterFilm from '../domain/PosterFilm';

export type Action = {
  type: string,
  id?: string,
  film?: Film,
  filter?: string,
  posters?: Array<PosterFilm>,
  films?: Array<Film>
};

export const toggleFilm = (id: string) => ({
  type: TOGGLE_FILM,
  id
}: Action);

export const addToWatchlist = (film: Film) => ({
  type: ADD_TO_WATCHLIST,
  film
}: Action);

export const addToPlaylist = (film: Film) => ({
  type: ADD_TO_PLAYLIST,
  film
}: Action);

export const removeFromWatchlist = (id: string) => ({
  type: REMOVE_FROM_WATCHLIST,
  id
}: Action);

export const selectFilm = (id: string) => ({
  type: SELECT_FILM,
  id
}: Action);

export const loadingFilm = () =>({
  type: LOADING_FILM
}: Action);

export const filterFilms = (filter: string) => ({
  type: FILTER_FILMS,
  filter
}: Action);

export const addToSearchlist = (posters: Array<PosterFilm>) => ({
  type: ADD_TO_SEARCHLIST,
  posters
}: Action);

export const loadPlaylist = () =>({
  type: LOAD_PLAYLIST
}: Action);

export const loadPlaylistComplete = (films: Array<Film>) => ({
  type: LOAD_PLAYLIST_COMPLETE,
  films
});

export const userAuthenticated = (principal: Object) => ({
  type: USER_AUTHENTICATED,
  principal
});

export const toggleCheckAuthentication = () => ({
  type: TOGGLE_CHECK_AUTHENTICATION
});