import types from './actionTypes';

export const firstApi = (codiceFiscaleRequired) => {
    console.warn("action started");
    return {
        type: types.FIRST_API,
        payload: codiceFiscaleRequired,
    }
};

export const firstApiInSuccess = (responseOk) => ({
    type: types.FIRST_API_IN_SUCCESS,
    payload: responseOk,
});

export const firstApiFailure = (responseNok) => ({
    type: types.FIRST_API_IN_FAILURE,
    payload: responseNok,
});





