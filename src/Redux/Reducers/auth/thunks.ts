import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials, login, logout } from "./authSlice";
import axios from "axios";
const baseUrl = "http://localhost:3001/auth";

export const checkingAuth = (email?: string, password?: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(checkingCredentials());
  };
};

export const registerWithEmail = (
  email: string,
  password: string,
  name: string
) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(checkingCredentials());
    const { data } = await axios.post(`${baseUrl}/register`, {
      email,
      password,
      name,
    });
    console.log(data);
    if (data.ok!) return dispatch(logout(data));
    dispatch(data);
    return data;
  };
};

// shopApi.defaults.headers.common = {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

export const loginWithEmail = (email: string, password: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(checkingCredentials());
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });

      if (response.data.ok) {
        const { user, token } = response.data.data;
        localStorage.setItem("token", token);
        const logUser = { name: user.name, email: user.email, uid: user.uid };
        return dispatch(login(logUser));
      }
    } catch (error) {
      localStorage.clear();
      return dispatch(logout({ errorMessage: `logout` }));
    }
  };
};

export const logoutuser = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    localStorage.clear();
      return dispatch(logout({ errorMessage: `logout` }));
  };
};
