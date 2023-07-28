import { Outlet } from "react-router-dom";

import { CommentComponent } from "../../components/CommentComponent/CommentComponent";
import styles from "./CommentsPage.module.scss";

const CommentsPage = () => {
  return (
    <div className={styles.wrapper}>
      <CommentComponent />
      <Outlet />
    </div>
  );
};

export { CommentsPage };
