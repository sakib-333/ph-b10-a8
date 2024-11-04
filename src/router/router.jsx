import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Body/BodyComponents/Home";
import Statistics from "../components/Body/BodyComponents/Statistics";
import Dashboard from "../components/Body/BodyComponents/Dashboard";
import About from "../components/Body/BodyComponents/About";
import PageNotFound from "../components/Body/BodyComponents/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
