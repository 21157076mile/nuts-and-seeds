import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean; // | undefined;
  logging?: boolean;
  currentUser?: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,// undefined,
  logging: false,
  currentUser: null
  // token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    login(state, action: PayloadAction<ApiLoginRequest>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<ApiLoginResponse>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload.user;
    },
    loginFailed(state) {
      state.logging = false;
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  }
});

// Actions
export const authActions = authSlice.actions;
export default authSlice;



// Reducer
// const authReducer = authSlice.reducer;


// Selectors
// export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
// export const selectIsLogging = (state: RootState) => state.auth.logging;