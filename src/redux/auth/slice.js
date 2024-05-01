import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { logIn, logout, refreshUser, register } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          logIn.pending,
          logout.pending,
          refreshUser.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          logIn.rejected,
          logout.rejected,
          refreshUser.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});
export const authReducer = authSlice.reducer;