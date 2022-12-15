import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });


export const getEvents = () => API.get("/events");
export const createEvent = (event) => API.post("/eventcreate", event);

export const loginUser = (formData) => API.post('/users/login', formData);
export const registerUser = (formData) => API.post('/users/register', formData);