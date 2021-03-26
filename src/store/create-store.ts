import { configureStore } from '@reduxjs/toolkit';
import { router5Reducer } from 'redux-router5';
import { counterReducer, detailReducer, homeReducer } from './slices';

export const store = configureStore({
  reducer: {
    router: router5Reducer,
    counter: counterReducer,
    home: homeReducer,
    detail: detailReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Store = ReturnType<typeof configureStore>;
