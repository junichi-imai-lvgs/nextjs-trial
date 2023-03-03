/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import userSlice from './user/slice';
import type { AnyAction, CombinedState } from '@reduxjs/toolkit';

const reducers = {
  [userSlice.name]: userSlice.reducer,
};

const combinedReducers = combineReducers(reducers);

const reducer = (state: CombinedState<typeof reducers>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combinedReducers(state, action);
};

// @ts-ignore
export const makeStore = ({ reduxWrapperMiddleware }) =>
  configureStore({
    // @ts-ignore
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
    // @ts-ignore
    middleware: (getDefaultMiddleware) => {
      return [...getDefaultMiddleware(), reduxWrapperMiddleware].filter(
        Boolean
      );
    },
  });

// @ts-ignore
const wrapper = createWrapper(makeStore);
export default wrapper;
