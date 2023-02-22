import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authInterface } from "../../../interfaces/userInterface";

const initialAuthState: authInterface = {
  uid: null,
  email: null,
  name: null,
  errorMessage: "",
  status: "false",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login: (
      state,
      { payload }: PayloadAction<{ name: string; uid: string; email: string }>
    ) => {
      (state.status = "true"), (state.uid = payload.uid);
      state.email = payload.email;
      state.name = payload.name;
      state.errorMessage = null;
    },
    logout: (state, {payload}: PayloadAction<{errorMessage? : string }>) => {
      state.status = "false";
      state.uid = null;
      state.email = null;
      state.name = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
      state.errorMessage = null;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { login, logout, checkingCredentials, clearErrorMessage } =
  authSlice.actions;
