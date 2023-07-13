import React from "react";
import CommentComponent from "../CommentComponent/CommentComponent";
import styles from "./PostComponent.module.css";

function PostComponent({ post }) {
  const { id, title, body } = post;
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <p>{body}</p>
      <CommentComponent id={id} />
    </div>
  );
}

export default PostComponent;
