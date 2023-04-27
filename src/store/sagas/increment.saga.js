import { put, takeLatest } from "redux-saga/effects";
import {
  incrementAction,
  incrementByAmountAction,
} from "../actions/counter.actions";

function* incrementSaga() {
  yield put(incrementByAmountAction(1));
}

export function* watchIncrementSaga() {
  // https://redux-saga.js.org/docs/advanced/Concurrency#takeevery
  yield takeLatest(incrementAction, incrementSaga);
}

// incrementAction is a user dispatched action. it can be intercepted by reducer but we make sure to not do that.
// incrementByAmountAction is dispatched only by saga. it will be intercepted by reducer.
