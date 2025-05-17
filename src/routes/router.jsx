import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import MenuPage from "../components/menu/MenuPage.jsx";

import SushiDashboard from "../pages/dashboard/Add/SushiDashboard.jsx";
import SushiDetails from "../pages/SushiDetails.jsx";
import SushiUpdate from "../pages/dashboard/Add/SushiUpdate.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import Profile from "../pages/Profile.jsx";
import AllUsers from "../pages/dashboard/users/AllUsers.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import NotFound from "../pages/NotFound.jsx";
import OrderPage from "../pages/dashboard/OrderPage.jsx";
import DashboardOverview from "../pages/dashboard/DashboardOverview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sushi/:id",
        element: <SushiDetails />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },

      // dashboard
      {
        path: "dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
        children: [
          {
            index: true,
            element: <DashboardOverview />,
          },
          {
            path: "sushi/add",
            element: <SushiDashboard />,
          },
          {
            path: "sushi/update/:id",
            element: <SushiUpdate />,
          },
          {
            path: "order",
            element: <OrderPage />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "all-users",
            element: <AllUsers />,
          },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
