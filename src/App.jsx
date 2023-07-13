import React, { useEffect, useState } from "react";
import PostComponent from "./PostComponent/PostComponent";
import styles from "./App.module.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <div className={styles.wrapper}>
      {posts.map((post) => (
        <PostComponent key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
