import { createBrowserRouter, Navigate } from "react-router-dom";

import { appRouting } from "./AppRouting";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { TodosPage } from "../pages/TodosPage/TodosPage";
import { AlbumsPage } from "../pages/AlbumsPage/AlbumsPage";
import { CommentsPage } from "../pages/CommentsPage/CommentsPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PostComponent } from "../components/PostComponent/PostComponent";

const router = createBrowserRouter([
  {
    path: appRouting.root,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={appRouting.TODOS} />,
      },
      {
        path: appRouting.TODOS,
        element: <TodosPage />,
      },
      {
        path: appRouting.ALBUMS,
        element: <AlbumsPage />,
      },
      {
        path: appRouting.COMMENTS,
        element: <CommentsPage />,
        children: [
          {
            path: appRouting.POST,
            element: <PostComponent />,
          },
        ],
      },
    ],
  },
]);

export { router };
