// @flow
import { TOGGLE_FILM, ADD_TO_PLAYLIST, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, SELECT_FILM, 
  LOADING_FILM, FILTER_FILMS, ADD_TO_SEARCHLIST, CLEAR_SEARCHLIST, SEARCHLIST_ERROR } from './types';
import Film from '../domain/Film';
import PosterFilm from '../domain/PosterFilm';

export type Action = {
  type: string,
  id?: string,
  film?: Film,
  filter?: string,
  posters?: Array<PosterFilm>,
  error?: string
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

export const clearSearchlist = () =>({
  type: CLEAR_SEARCHLIST
}: Action);

export const searchlistError = (error: string) => ({
  type: SEARCHLIST_ERROR,
  error
}: Action);