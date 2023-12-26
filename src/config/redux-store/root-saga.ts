import { all } from "redux-saga/effects";

import authSaga from "@rtk-slices/auth/auth.saga";

export default function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}
