import React from "react";

function UserPostItem({ post }) {
  return (
    <div>
      <h4>
        {post.id}. {post.title}
      </h4>
      <p>{post.body}</p>
    </div>
  );
}

export default UserPostItem;
