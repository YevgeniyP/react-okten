import React, { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";

function PostComponent({ userId }) {
  console.log(userId);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [userId]);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostComponent;
