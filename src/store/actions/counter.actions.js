const { counterSlice } = require("../reducers/counter.reducer");

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
