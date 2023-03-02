import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import { AnimalDetails } from "./components/AnimalDetail/AnimalDetail";
import { Animals } from "./components/Animals/Animals";

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
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animals/:id",
        element: <AnimalDetails />,
      },
    ],
  },
]);
