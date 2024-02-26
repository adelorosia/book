import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookPage from "../pages/BookPage";
import UserPage from "../pages/UserPage";
import AuthPage from "../pages/AuthPage";
import VerifyAccountPage from "../pages/VerifyAccountPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <BookPage />,
      },
      {
        path: "/home",
        element: <BookPage />,
      },
      {
        path: "/home/:bookId",
        element: <BookPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/api/verify_account/:token",
        element: <VerifyAccountPage />,
      },
    ],
  },
]);
