import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:3001";


export const getAllProducts =async() => {
    return async (dispatch: Dispatch) =>{
        try {
            const {data} = await axios.get(`${baseUrl}/item`)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
}