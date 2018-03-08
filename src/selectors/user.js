// @flow
import type { State } from '../../reducers/user';

export const isAuthenticated = (state : State) => state.authenticated;
export const isCheckingAuthentication = (state: State) => state.loading;
export const getPrincipal = (state: State) => state.principal; 