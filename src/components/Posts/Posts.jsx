import React, { useContext, useEffect, useState } from "react";
import { Post } from "./Post/Post";
import { AppContext } from "../../App";
import styles from "./Posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const { isSending } = useContext(AppContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [isSending]);
  return (
    <div className={styles.wrapper}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export { Posts };
