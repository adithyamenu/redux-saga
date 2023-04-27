import { createAction } from "@reduxjs/toolkit";

const { counterSlice } = require("../reducers/counter.reducer");

// export const {
//   increment: incrementAction,
//   decrement: decrementAction,
//   incrementByAmount: incrementByAmountAction,
// } = counterSlice.actions;

// Reducer used actions
export const { incrementByAmount: incrementByAmountAction } =
  counterSlice.actions;

// User used actions
export const incrementAction = createAction("INCREMENT");
export const decrementAction = createAction("DECREMENT");
