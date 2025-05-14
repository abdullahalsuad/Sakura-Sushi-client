import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import MenuPage from "../components/menu/MenuPage.jsx";

import SushiDashboard from "../components/Add/SushiDashboard.jsx";

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
    ],
  },
]);

export default router;
