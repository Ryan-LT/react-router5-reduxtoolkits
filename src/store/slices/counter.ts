import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtra } from '@store';

export const testNavigateInRedux = createAsyncThunk<{}, void, ThunkExtra>(
  'counter/navigate',
  (_payload, { extra: { router } }) => router.navigate('home'),
);

export const {
  reducer: counterReducer,
  actions: { increment, decrement, increaseByAmount },
} = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(testNavigateInRedux.fulfilled, (state) => state);
  },
});
