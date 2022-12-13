import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './modules/Events/redux/eventsReducer';
import logger from 'redux-logger';
import authReducer from './modules/Auth/redux/authReducer';

export const store = configureStore({
    reducer: {
        eventState: eventReducer,
        authState: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(logger),
});