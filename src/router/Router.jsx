import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import { getProfile } from "../Services/userServices";
import Root from "../layout/Root";
import Init from "../pages/Init/Init";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes/Recipes";
import MenuPlanner from "../pages/MenuPlanner/MenuPlanner";
import Search from "../pages/Search/Search";
import Recipe from "../pages/Recipe/Recipe";
import AddRecipeMenuPlanner from "../pages/AddRecipeMenuPlanner/AddRecipeMenuPlanner";
import Profile from "../pages/Profile/Profile";
import RecipesAdmin from "../pages/RecipesAdmin/RecipesAdmin";
import AddRecipeAdmin from "../pages/AddRecipeAdmin/AddRecipeAdmin";
import EditRecipe from "../pages/EditRecipe/EditRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/init" replace={true} />,
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
      if (!localStorage.getItem("token")) {
        return redirect("/login");
      } else {
        return null;
      }
    },
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/recipes",
        element: <Recipes />,
      },
      {
        path: "/home/recipes/:id",
        element: <Recipe />,
      },
      {
        path: "/home/recipes/add",
        element: <AddRecipeMenuPlanner />,
      },
      {
        path: "/home/menuplanner",
        element: <MenuPlanner />,
      },
      {
        path: "/home/search",
        element: <Search />,
      },
      {
        path: "/home/search/:id",
        element: <Recipe />,
      },
      {
        path: "/home/me",
        element: <Profile />,
      },
      {
        path:"/home/recipes/admin",
        element: <RecipesAdmin />,
        loader: async () => {
          const result = await getProfile()
            if (result.role !== "admin") {
              return redirect("/home")
            } else {
              return null;
          }
        },
      },
      {
        path:"/home/recipes/admin/add",
        element: <AddRecipeAdmin />,
        loader: async () => {
          const result = await getProfile()
            if (result.role !== "admin") {
              return redirect("/home")
            } else {
              return null;
          }
        },
      },
      {
        path:"/home/recipes/admin/:id",
        element: <EditRecipe />,
        loader: async () => {
          const result = await getProfile()
            if (result.role !== "admin") {
              return redirect("/home")
            } else {
              return null;
          }
      },
    }
    ],
  },
]);

export default router;
