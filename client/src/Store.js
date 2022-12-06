import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './modules/Events/redux/eventsReducer';

export const store = configureStore({
    reducer: {
        eventState: eventReducer
    }
});