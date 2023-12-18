import { call, put, takeEvery } from "redux-saga/effects";

import { getCatsSuccess } from "./catState";

// import { fetchCats, fetchCat } from './catAPI';
function* fetchCats() {
  try {
    const cats: unknown = yield call(() => fetch("https://api.thecatapi.com/v1/breads"));
    const formattedCats: any[] = yield cats.json();
    const formattedCatsShortened: unknown = formattedCats.slice(0,10);
    yield put(getCatsSuccess(formattedCatsShortened));
    // yield put({ type: "cats/getCatsSuccess", payload: formattedCatsShortened });
  } catch (e) {
    // yield put({ type: "cats/getCatsFailure", payload: e.message });
  }
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", fetchCats);
  // yield takeEvery(fetchCat.type, fetchCatSaga);
}

export default catSaga;