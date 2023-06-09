import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter.reducer";
import rootSaga from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
