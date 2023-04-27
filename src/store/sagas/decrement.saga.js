import { put, takeLatest } from "redux-saga/effects";
import {
  decrementAction,
  incrementByAmountAction,
} from "../actions/counter.actions";

function* decrementSaga() {
  yield put(incrementByAmountAction(-1));
}

export function* watchDecrementSaga() {
  // https://redux-saga.js.org/docs/advanced/Concurrency#takeevery
  yield takeLatest(decrementAction, decrementSaga);
}
