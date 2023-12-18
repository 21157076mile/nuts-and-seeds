import { combineReducers } from "@reduxjs/toolkit";

// import { counterSlice } from "./slices";
import catsReducer from "./slices/catSlice/catState";

const rootReducer = combineReducers({
  // [cartSlice.name]: cartSlice.reducer,
  cats: catsReducer,
  // counter: counterSlice.reducer,
});

export default rootReducer;
