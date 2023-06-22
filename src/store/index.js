import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initalState = { counter: 0, showCounter: true };

// createSlice will create a reducer and action for us
const counterSlice = createSlice({
  name: "counter", // name of the slice
  initialState: initalState, // initial state
  reducers: {
    // reducers which this slice needs
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // with action payload
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer, // reducer, man kann auch hier mehrere reducer kombinieren
}); // create/configure a store with the reducer

export const counterActions = counterSlice.actions; // export the actions

export default store;
