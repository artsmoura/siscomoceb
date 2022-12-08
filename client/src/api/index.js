import axios from 'axios';

const url = 'http://localhost:5000/events';

export const getEvents = () => axios.get(url);

export const createEvent = (event) => axios.post(url, event);