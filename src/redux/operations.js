import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addData,
  createUser,
  deleteData,
  getData,
  getUserInfo,
  login,
  setAuthHeader,
  clearAuthHeader,
  logOut,
} from 'API/api';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (signal, thunkAPI) => {
    try {
      return await getData(signal);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addcotanct',
  async (data, thunkAPI) => {
    try {
      return await addData(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteData(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//User

export const registerUser = createAsyncThunk(
  'registerUser',
  async (userInfo, thunkAPI) => {
    try {
      const userData = await createUser(userInfo);
      setAuthHeader(userData.token);
      return userData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'logInUser',
  async (userInfo, thunkAPI) => {
    try {
      const userData = await login(userInfo);
      setAuthHeader(userData.token);
      return userData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      return await getUserInfo();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'logOutUser',
  async (_, thunkAPI) => {
    try {
      logOut();
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
