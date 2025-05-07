import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllBoxes from "../Pages/AllBoxes";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/AuthPages/Register";
import AuthRoot from "../Layout/AuthRoot";
import Login from "../Pages/AuthPages/Login";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import ResetPassword from "../Pages/AuthPages/ResetPassword";
import BoxDetails from "../Components/HomeLayout/BoxDetails";
import Loading from "../Pages/Loading";
import OutsideErrorPage from "../Pages/ErrorPage/OutsideErrorPage";
import UpdateProfile from "../Pages/AuthPages/UpdateProfile";
import Update from "../Pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allboxes",
        element: <PrivateRoute><AllBoxes></AllBoxes></PrivateRoute>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:"/update",
        element:<Update></Update>
      },
      {

        path:"/box-details/:id",
        loader:()=>fetch("/curiousDetails.json"),
        element:<PrivateRoute><BoxDetails></BoxDetails></PrivateRoute>,
        errorElement:<ErrorPage></ErrorPage>,
        hydrateFallbackElement:<Loading></Loading>
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthRoot></AuthRoot>,
    children: [
      {
        index:true,
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path:"/auth/reset",
        element:<ResetPassword></ResetPassword>
      },
      {
        path:"/auth/updateProfile",
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      }
    ],
  },
  {
    path: "*",
    element: <OutsideErrorPage></OutsideErrorPage>
  },
]);

export default router;
