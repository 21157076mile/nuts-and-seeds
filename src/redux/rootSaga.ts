import { all } from "redux-saga/effects";

import catSaga from "./slices/catSlice/catSaga";

// import authSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([
    catSaga(),
    // authSaga(),
    // counterSaga(), authSaga(), dashboardSaga()...
  ]);
}
