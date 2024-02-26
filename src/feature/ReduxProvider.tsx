import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router";
import { router } from "../routes";
import axios from "axios";

 axios.defaults.withCredentials=true

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default ReduxProvider;
