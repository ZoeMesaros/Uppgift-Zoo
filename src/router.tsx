import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AnimalDetails from "./components/AnimalDetails";
import { Home } from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/details/:id",
        element: <AnimalDetails />,
      },
    ],
  },
]);
