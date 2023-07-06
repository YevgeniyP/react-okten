import React from "react";
import UserPostItem from "../UserPostItem/UserPostItem";

function UserPostComponent({ posts }) {
  return (
    <div>
      <h3>Posts of current user</h3>
      {posts.map((post) => (
        <UserPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default UserPostComponent;
