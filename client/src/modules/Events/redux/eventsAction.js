import axios from "axios";

export const EVENTS_LOAD_SUCCESS = 'EVENTS_LOAD_SUCCESS';
export const eventsLoadSuccess = events => ({
    type: EVENTS_LOAD_SUCCESS,
    payload: events
});

export const EVENTS_LOAD_ERROR = 'EVENTS_LOAD_ERROR';
export const eventsLoadError = error => ({
    type: EVENTS_LOAD_ERROR,
    payload: error
});

export const listEvents = () => {
    return dispatch => {
        axios
            .get("")
            .then("")
            .catch(error => {
                dispatch(eventsLoadError({
                    type: EVENTS_LOAD_ERROR,
                    payload: error.message
                }));
            });
    };
};