//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";


const store = configureStore({
  // create a store
  reducer: { counter: counterReducer, auth: authReducer }, // combine all the reducers
});

export default store;
