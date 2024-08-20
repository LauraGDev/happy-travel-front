
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Create from "../pages/Create";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/sign-in',
          element: <SignIn />,
        },
        {
          path: '/create',
          element: <Create />,
        },
        {
          path: '/edit',
          element: <Edit />,
        },
        {
          path: '/detail/:page?',
          element: <Detail />,
        },
      ],
    },
  ]);