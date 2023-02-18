import { BrowserRouter } from "react-router-dom";
import { ShopRouter } from "./ShopRouter";
import { AuthRouter } from "./AuthRouter";
import { Suspense } from "react";
import { Loader } from "../Components/home/Loader";

export const AppRouter = () => {
  const auth = true;

  return (
    <Suspense fallback= {<Loader/>}> 
      <BrowserRouter >
      {
      !auth 
      ?<AuthRouter /> 
      : <ShopRouter />
      }
      </BrowserRouter>
    </Suspense>
  );
};
