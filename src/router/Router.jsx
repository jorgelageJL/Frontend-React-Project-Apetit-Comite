import { Navigate, createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import LoginHeader from "../components/LoginHeader/LoginHeader";
import Init from "../pages/Init/Init";
import Recipes from "../pages/Recipes/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Navigate to="/init" replace={true} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/init",
        element: <Init/>
      },
      {
        path: "/recipes",
        element: <Recipes/>
      }
    ],
  },
]);

export default router;
