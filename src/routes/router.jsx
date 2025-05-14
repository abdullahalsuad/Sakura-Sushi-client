import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import MenuPage from "../components/menu/MenuPage.jsx";

import SushiDashboard from "../components/Add/SushiDashboard.jsx";
import SushiDetails from "../components/homemenu/SushiDetails.jsx";
import SushiUpdate from "../components/Add/SushiUpdate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

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
        path: "/add",
        element: <SushiDashboard />,
      },
      {
        path: "/sushi/:id",
        element: <SushiDetails />,
      },
      {
        path: "/sushi/update/:id",
        element: <SushiUpdate />,
      },
    ],
  },
]);

export default router;
