import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './modules/Events/redux/eventsReducer';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        eventState: eventReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});