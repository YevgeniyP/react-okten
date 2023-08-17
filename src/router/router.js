import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "../layouts";
import { CharacterComponent, EpisodeComponent } from "../components";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"episodes"} />,
      },
      {
        path: "episodes",
        element: <EpisodeComponent />,
      },
      {
        path: "characters",
        element: <CharacterComponent />,
      },
    ],
  },
]);
