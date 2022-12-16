import * as api from '../../../api/index.js';

export const UPDATE_CONTENT_AUTH = "UPDATE_CONTENT_AUTH";
export const AUTH_USER = "AUTH_USER";
export const CLEAR_AUTH_FIELDS = "CLEAR_AUTH_FIELDS";
export const LOGOUT = "LOGOUT";

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

export const clearAuthFields = () => ({
    type: CLEAR_AUTH_FIELDS
});

export const logout = () => ({
    type: LOGOUT
});

export const register = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.registerUser(formData);
        dispatch(authUser(data));
        navigate('/');

    } catch (error) {
        console.log(error.message);
    }
};

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(formData);
        dispatch(authUser(data));
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
};