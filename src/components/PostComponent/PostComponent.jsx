import React, { useEffect, useState } from "react";
import { PostItem } from "../PostItem/PostItem";

const PostComponent = ({ selectedUser }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser}/posts`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [selectedUser]);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export { PostComponent };
