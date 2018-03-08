// @flow
import * as Types from '../actions/types';

export type State = {
    principal: Object,
    authenticated: boolean,
    loading: boolean
};

const initialState: State = {
    principal: null,
    authenticated: false,
    loading: true
};

const user = (state: State = initialState, action: Object) => {
    switch(action.type) {
        case Types.USER_AUTHENTICATED: {
            const { principal } = action;

            return Object.assign(state, {}, { principal, authenticated: true, loading: false });
        }

        case Types.TOGGLE_CHECK_AUTHENTICATION: {
            return Object.assign(state, {}, { loading: !state.loading });
        }

        default: 
            return state;
    }
}

export default user;