/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { middleware, sagaMiddleware } from "./middleware";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ // true is default for all
      thunk: false,
      immutableCheck: true,
      serializableCheck: false,
      actionCreatorCheck: true,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

/* hooks - use throughout your app instead of plain `useDispatch` and `useSelector` */
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
