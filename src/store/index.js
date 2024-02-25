import { configureStore, createSlice } from "@reduxjs/toolkit";

const { createStore } = require("redux");
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    manualIncrease(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...state, counter: state.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...state, counter: state.counter - 1 };
//   } else if (action.type === "changeState")
//     return { ...state, showCounter: !state.showCounter };
// };
const store = configureStore({ reducer: counterSlice.reducer });
export const counterActions = counterSlice.actions;
export default store;
