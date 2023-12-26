import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "redux-saga";
import { call, cancel,fork, put,take } from "redux-saga/effects";

import { LOCAL_STORAGE_KEY } from "@shared/constant";
import { loginApi } from "@shared/services/login.service";
import { hoursToMilliseconds } from "@shared/utils";
import {
  deleteLocalStorage,
  getLocalStorageWithExpiry,
  setLocalStorage
} from "@shared/utils/browser-storage";
import { authActions } from "./auth.slice";

function* login({ email, password }: ApiLoginRequest) {
  try {
    const { status, data }: ApiData<ApiLoginResponse> = yield call(loginApi, { email, password });
    if (status === "succeeded" && data?.token) {
      const ttl = hoursToMilliseconds(5);
      setLocalStorage(LOCAL_STORAGE_KEY.accessToken, JSON.stringify(data.token), ttl);
      setLocalStorage(LOCAL_STORAGE_KEY.currentUser, JSON.stringify(data.user), ttl);
      yield put(authActions.loginSuccess({
        token: data.token,
        user: data.user,
      }));
    } else {
      yield put(authActions.loginFailed());
    }
  } catch (error) {
    yield put(authActions.loginFailed());
  }
}

function* logout() {
  deleteLocalStorage(LOCAL_STORAGE_KEY.accessToken);
  // Maybe we need to dispatch some action to remove all permissions users.
  // ...
}

function* checkAuth() {
  const accessToken = getLocalStorageWithExpiry(LOCAL_STORAGE_KEY.accessToken);
  if (accessToken) {
    const currentUser = getLocalStorageWithExpiry(LOCAL_STORAGE_KEY.currentUser);
    yield put(authActions.loginSuccess({
      token: accessToken as string,
      user: currentUser as User,
    }));
  }
}

function* loginWatcher() {
  // Generators halt execution until their next step is ready/occurring
  // So it's not like this loop is firing in the background 1000/sec
  // Instead, it says, "okay, true === true", and hits the first step...
  while (true) {
    yield fork(checkAuth);

    const { payload }: PayloadAction<ApiLoginRequest> = yield take(authActions.login.type);
    const task: Task = yield fork(login, payload);

    const action: PayloadAction = yield take([
      authActions.logout.type,
      authActions.loginFailed.type
    ]);
    if (action.type === authActions.logout.type) {
      yield cancel(task);
    }
    yield call(logout);
  }
}

export default loginWatcher;

/**
 *
 function* watchFetchProducts() {
  yield takeEvery('PRODUCTS_REQUESTED', fetchProducts)
}

function* fetchProducts() {
  const products = yield Api.fetch('/products')
  console.log(products)
}
 */

// export default function* authSaga() {
//   console.log("coming soon... authSaga");
//   yield fork(loginWatcher);
// }
