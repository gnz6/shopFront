import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Reducers/auth/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { shoppingSlice } from '../Reducers/home/shoppingSlice';

 const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        shopping: shoppingSlice.reducer
    }
})

export const useAppDispatch : () => typeof store.dispatch = useDispatch;

export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>>= useSelector; 


export default store;