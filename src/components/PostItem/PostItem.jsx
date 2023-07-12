import React from "react";

function PostItem({ post }) {
  const { title, body } = post;
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default PostItem;
