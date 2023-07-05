import React, { useState } from "react";
import postItem from "./PostItem.module.css";
import PostBody from "../PostBody/PostBody";

function PostItem({ post }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={postItem.wrapper}>
      <h2 className={postItem.header}>
        {post.id}. {post.title}
      </h2>
      <button
        onClick={() => (!visible ? setVisible(true) : setVisible(false))}
        className={postItem.btn}
      >
        {!visible ? "details" : "hide"}
      </button>
      {visible ? <PostBody body={post.body} /> : ""}
    </div>
  );
}

export default PostItem;
