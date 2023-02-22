import  store  from "./Redux/Store/store";
import { AppRouter } from "./Router/AppRouter";
import {Provider} from "react-redux"

const CarShopApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export { CarShopApp };
