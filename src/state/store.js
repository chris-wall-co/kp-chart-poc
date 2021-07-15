import {
    createStore
} from 'redux';

const ACTIONS = Object.freeze({
    SET_DATA: 'set-data',
    SET_COMPLIANCE: 'set-compliance',
});

const reducer = (state = {}, action) => {
    if (typeof state !== 'object' || state === null) {
        state = {};
    }

    switch (action.type) {
        case ACTIONS.SET_DATA:
            return { ...state, data: action.data };
        case ACTIONS.SET_COMPLIANCE:
            return { ...state, compliance: action.data };
        default:
            return state;
    }
}

export const ActionCreators = Object.freeze({
    setData: (data) => ({ type: ACTIONS.SET_DATA, data }),
    setCompliance: (data) => ({ type: ACTIONS.SET_COMPLIANCE, data }),
});

export const initStore = (initialState = {}) => {
    return createStore(reducer, initialState);
};