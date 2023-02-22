import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { shopInitialState } from '../../../interfaces/shoppingInterface';

export const shoppingSlice = createSlice({
    name: "shopping",
    initialState: shopInitialState,
    reducers:{
        savingProduct : (state ) => {state.isSaving = true},
        addedProduct : (state, action) => {
            state.products.concat( action.payload ),
            state.isSaving = false
        },
        setActiveProduct:(state, action ) =>  {
            state.displayProduct = action.payload
        },
        updateProduct : (state, {payload})=>{
            state.isSaving = false,
            state.products = state.products.map(product => {
                if ( product._id === payload.id ){
                    return payload
                }
                return product
            })
        },
        deleteProduct: (state, {payload}) => {
            state.displayProduct = null
            state.products = state.products.filter(product => product._id !== payload)
         },
        clearOnLogout:(state)=>{
            state.isSaving = false
            state.products=[]
            state.displayProduct= null
        }
    }
})