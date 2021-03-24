import { configureStore } from '@reduxjs/toolkit';
import { router5Reducer } from 'redux-router5';
import { counterReducer } from './slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    router: router5Reducer,
  },
});

export type State = ReturnType<typeof store.getState>;
