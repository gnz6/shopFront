import { BrowserRouter } from "react-router-dom";
import { ShopRouter } from "./ShopRouter";
import { AuthRouter } from "./AuthRouter";
import { Suspense } from "react";
import { Loader } from "../Components/home/Loader";
import { Navbar } from "../Components/home/Navbar";

export const AppRouter = () => {
  const auth = true;

  return (
    <Suspense fallback= {<Loader/>}> 
      <BrowserRouter >
      <Navbar/>
      {
      !auth 
      ?<AuthRouter /> 
      : <ShopRouter />
      }
      </BrowserRouter>
    </Suspense>
  );
};
