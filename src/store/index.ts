import { rootReducer } from './root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';

const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
