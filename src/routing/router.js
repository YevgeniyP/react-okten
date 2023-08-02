import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { PostsPage } from "../pages/PostsPage/PostsPage";
import { CommentsPage } from "../pages/CommentsPage/CommentsPage";
import { CarsPage } from "../pages/CarsPage/CarsPage";
import { AppRouting } from "./AppRouting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={AppRouting.posts} />,
      },
      {
        path: AppRouting.posts,
        element: <PostsPage />,
      },
      {
        path: AppRouting.comments,
        element: <CommentsPage />,
      },
      {
        path: AppRouting.cars,
        element: <CarsPage />,
      },
    ],
  },
]);

export { router };
