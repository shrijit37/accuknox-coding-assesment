// store.js
import { configureStore } from '@reduxjs/toolkit';
import checkboxReducer from './checkboxSlice';

export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
  },
});
