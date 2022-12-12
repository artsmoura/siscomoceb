import { redirect } from 'react-router-dom';
import * as api from '../../../api/index.js';

export const EVENTS_LOAD_SUCCESS = "EVENTS_LOAD_SUCCESS";
export const EVENTS_LOAD_ERROR = "EVENTS_LOAD_ERROR";
export const EVENTS_CREATE_SUCCESS = "EVENTS_CREATE_SUCCESS";
export const EVENTS_CREATE_ERROR = "EVENTS_CREATE_ERROR";
export const UPDATE_CONTENT_EVENT = "UPDATE_CONTENT_EVENT";

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
    try {
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
    }
};

export const updateContentEvent = e => async (dispatch) => {
    dispatch({
        type: UPDATE_CONTENT_EVENT,
        payload: e
    });
};