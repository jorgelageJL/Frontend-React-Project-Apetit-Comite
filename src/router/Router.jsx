import { Navigate, createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Init from "../pages/Init/Init";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/signUp";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes/Recipes";
import MenuPlanner from "../pages/MenuPlanner/MenuPlanner";
// import LoginHeader from "../components/LoginHeader/LoginHeader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/init" replace={true} />
  },
  {
    path: "/init",
    element: <Init />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Root />,
    loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/login')
      } else {
        return null
      }
    },
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: "/home/recipes",
        element: <Recipes />
      },
      {
        path: "/home/menuplanner",
        element: <MenuPlanner/>
      }
    ]
  },
]);

export default router;
