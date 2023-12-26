import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "../../rtk-slices/auth/auth.slice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

export default rootReducer;
