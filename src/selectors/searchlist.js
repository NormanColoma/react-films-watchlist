import { createSelector } from 'reselect';

const getPosters = state => state.posters;

export const getSearchlist = createSelector(
    [getPosters],
    posters => Object.keys(posters).map(key => posters[key])
);