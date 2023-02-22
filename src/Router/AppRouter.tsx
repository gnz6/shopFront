import { BrowserRouter } from "react-router-dom";
import { ShopRouter } from "./ShopRouter";
import { AuthRouter } from "./AuthRouter";
import { Suspense } from "react";
import { Loader } from "../Components/home/Loader";
import { Navbar } from "../Components/home/Navbar";
import { useAppSelector } from '../Redux/Store/store';
import { CheckingAuth } from "../Components/home/CheckingAuth";

export const AppRouter = () => {

  const {auth} = useAppSelector(state => state)

  if(auth.status=== "checking"){
    return <CheckingAuth/>
  }
  
  return (
    <Suspense fallback= {<Loader/>}> 
      <BrowserRouter >
      <Navbar/>
      {
      auth.status === "true"
      ? <ShopRouter />
      : <AuthRouter /> 
      }
      </BrowserRouter>
    </Suspense>
  );
};
