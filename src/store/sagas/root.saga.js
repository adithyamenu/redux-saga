import { all } from "redux-saga/effects";
import { watchDecrementSaga } from "./decrement.saga";
import { watchIncrementSaga } from "./increment.saga";

const rootSaga = function* () {
  yield all([watchIncrementSaga(), watchDecrementSaga()]);
};

export default rootSaga;
