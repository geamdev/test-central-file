import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from './reducers';

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;