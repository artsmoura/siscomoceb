import { redirect } from 'react-router-dom';
import * as api from '../../../api/index.js';

export const EVENTS_LOAD_SUCCESS = "EVENTS_LOAD_SUCCESS";
export const EVENTS_LOAD_ERROR = "EVENTS_LOAD_ERROR";
export const EVENTS_CREATE_SUCCESS = "EVENTS_CREATE_SUCCESS";
export const EVENTS_CREATE_ERROR = "EVENTS_CREATE_ERROR";
export const UPDATE_CONTENT_EVENT = "UPDATE_CONTENT_EVENT";
export const UPDATE_ACCOMMODATION = "UPDATE_ACCOMMODATION";
export const CLEAR_FORM_INPUT = "CLEAR_FORM_INPUT";

export const listEvents = () => async (dispatch) => {
    try {
        const { data } = await api.getEvents();
        dispatch({
            type: EVENTS_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch(({
            type: EVENTS_LOAD_ERROR,
            payload: error.message
        }));
    }
};

export const createEvent = (event) => async (dispatch) => {
    console.log(event);
    /* try {
        const { data } = await api.createEvent(event);
        dispatch({
            type: EVENTS_CREATE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: EVENTS_CREATE_ERROR,
            payload: error.message
        });
    } */
};

export const updateContentEvent = e => async (dispatch) => {
    dispatch({
        type: UPDATE_CONTENT_EVENT,
        payload: e
    });
};

export const updateAccommodation = e => async (dispatch) => {
    dispatch({
        type: UPDATE_ACCOMMODATION,
        payload: e
    });
};

export const clearFormInput = () => ({
    type: CLEAR_FORM_INPUT
});