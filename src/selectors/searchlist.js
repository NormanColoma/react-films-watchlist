// @flow
import { createSelector } from 'reselect';
import type { State } from '../reducers/searchlist';

const getPosters = (state: State) => state.posters;

export const getSearchlist = createSelector(
    [getPosters],
    posters => Object.keys(posters).map(key => posters[key])
);