import React, { useContext } from "react";
import { AppContext } from "../../../App";
import styles from "./Post.module.css";

const Post = ({ post }) => {
  const { setSelectedPost } = useContext(AppContext);
  const { id, title, body } = post;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>
        {id}. {title}
      </h2>
      <p className={styles.body}>{body}</p>
      <input
        type="button"
        value={"Comment"}
        onClick={() => setSelectedPost(id)}
        className={styles.btn}
      />
    </div>
  );
};

export { Post };
