
  import { createAsyncThunk } from '@reduxjs/toolkit';


import {
  apiLogOut,
  apiLogin,
  apiRefresh,
  apiRegister,
  setToken,
  clearToken,
  
} from "../../services/api";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkApi) => {
    try {
      const data = await apiRegister(newUser);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    const data = await apiLogin(user);
    setToken(data.token);
    console.log(data);
    return data;

  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await apiLogOut();
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);
      const data = await apiRefresh();
      console.log(token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


