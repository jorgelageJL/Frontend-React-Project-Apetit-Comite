import { Navigate, createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Init from "../pages/Init/Init";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/signUp";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes/Recipes";
import MenuPlanner from "../pages/MenuPlanner/MenuPlanner";
import Search from "../pages/Search/Search";
import Recipe from "../pages/Recipe/Recipe";
import AddRecipeMenuPlanner from "../pages/AddRecipeMenuPlanner/AddRecipeMenuPlanner";
import Profile from "../pages/Profile/Profile";
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
        path:"/home/recipes/:id",
        element: <Recipe/>
      },
      {
        path:"/home/recipes/add",
        element: <AddRecipeMenuPlanner/>
      },
      {
        path: "/home/menuplanner",
        element: <MenuPlanner/>
      },
      {
        path:"/home/search",
        element: <Search/>
      },
      {
        path:"/home/search/:id",
        element: <Recipe/>
      },
      {
        path:"/home/me",
        element: <Profile/>
      },
    ]
  },
]);

export default router;
