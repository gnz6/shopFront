import { useEffect } from 'react';
import { getAllProducts } from '../../Redux/Reducers/home/thunks';
import { useAppDispatch, useAppSelector } from '../../Redux/Store/store';

export const Products = () => {
  
    const dispatch = useAppDispatch()
    const {shopping} = useAppSelector(state => state)
    console.log(shopping);
    
    // useEffect(()=>{
    //     dispatch(getAllProducts())

    // },[])
  
    const products = getAllProducts()
    console.log(products)
  
    return (
    <div>
        <h2>Products</h2>


    </div>
  )
}
