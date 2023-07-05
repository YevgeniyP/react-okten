import React, { useEffect, useState } from "react";
import PostItem from "../PostItem/PostItem";
import postItem from "./PostComponent.module.css";

function PostComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      <h1 className={postItem.header}>Posts list</h1>
      <div className={postItem.wrapper}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostComponent;
