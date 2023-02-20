import { Dispatch } from "@reduxjs/toolkit"
import { checkingCredentials } from "./authSlice"
import axios from "axios"
import shopApi from "../../../config/axiosConfig"


export const checkingAuth = (email ?: string , password? : string) =>{
    return async(dispatch : Dispatch ) =>{
        dispatch(checkingCredentials())
    }
}


export const registerWithEmail = ( email : string, password: string ) =>{
    return async ( dispatch : Dispatch) =>{
        dispatch( checkingCredentials() )
        const response = await axios.post(`${shopApi}/auth/register`, {email, password})
        console.log(response)
    }
}