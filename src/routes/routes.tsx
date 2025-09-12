import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 - Not Found</div>,
  },
]);
