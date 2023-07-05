import React from "react";
import postBody from "./PostBody.module.css";

function PostBody({ body }) {
  return <div className={postBody.wrapper}>{body}</div>;
}

export default PostBody;
