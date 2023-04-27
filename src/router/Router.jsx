import { Navigate, createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import LoginHeader from "../components/LoginHeader/LoginHeader";
import Init from "../pages/Init/Init";

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
      }
    ],
  },
]);

export default router;
