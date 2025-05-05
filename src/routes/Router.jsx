import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AllBoxes from "../Pages/AllBoxes";
import About from "../Pages/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        element: <AllBoxes></AllBoxes>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);

export default router;
