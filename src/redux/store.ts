/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import {
  type TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// type ThunkAction
import { middleware, sagaMiddleware } from "./middleware";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["login"],
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      // immutableCheck
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

/* Types */
export type ReduxStore = typeof reduxStore
// RootState ReduxState
export type RootState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const persistor = persistStore(reduxStore);
