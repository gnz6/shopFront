import { Product } from '../../../Node+TypeScript/src/interfaces/product.interface';


export interface ShoppingInterface{
    products : Product[] | []
    displayProduct? : Product| null  ,
    isSaving : boolean,

}

export const shopInitialState : ShoppingInterface = {
    products : [],
    displayProduct : null,
    isSaving: false
}