import * as api from '../../../api/index.js';

export const UPDATE_CONTENT_AUTH = "UPDATE_CONTENT_AUTH";
export const AUTH_USER = "AUTH_USER";

export const updateContentAuth = e => async (dispatch) => {
    dispatch({
        type: UPDATE_CONTENT_AUTH,
        payload: e
    });
};

export const authUser = (user) => async (dispatch) => {
    dispatch({
        type: AUTH_USER,
        payload: user
    });
};