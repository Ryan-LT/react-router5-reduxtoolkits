import { configureStore } from '@reduxjs/toolkit';
import { router5Reducer } from 'redux-router5';
import { Router } from 'router5';
import { store } from 'src';
import { counterReducer, detailReducer, homeReducer } from './slices';

export const createStore = (router: Router) =>
  configureStore({
    reducer: {
      router: router5Reducer,
      counter: counterReducer,
      home: homeReducer,
      detail: detailReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: { router } } }),
  });

export type Store = ReturnType<typeof configureStore>;
export type State = ReturnType<typeof store.getState>;
export type ThunkExtra = {
  extra: { router: Router };
};
