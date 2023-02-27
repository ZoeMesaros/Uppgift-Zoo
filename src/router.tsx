import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AnimalList } from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AnimalList />,
        index: true,
      },
      /*       {
        path: "/animals/:id",
        element: <Details />,
      }, */
    ],
  },
]);
