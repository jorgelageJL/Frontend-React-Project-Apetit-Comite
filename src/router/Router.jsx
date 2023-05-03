import { Navigate, createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import LoginHeader from "../components/LoginHeader/LoginHeader";
import Init from "../pages/Init/Init";
import SignUp from "../pages/signUp/signUp";
import Recipes from "../pages/Recipes/Recipes";

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
    element: <Home />,
    // element: <Root />,
    // loader: () => {
    //   if (!localStorage.getItem('token')) {
    //     return redirect('/login')
    //   } else {
    //     return null
    //   }
    // },
    // children: [
    //   {
    //     path: '/home',
    //     element: <Home />
    //   },
    //   {
    //     path: "/home/recipes",
    //     element: <Recipes />
    //   }
    // ]
  },
]);

export default router;
