import { useEffect, useState } from "react";

import { postService } from "../../services/postService";
import { Post } from "../Post/Post";
import styles from "./Posts.module.scss";

const Posts = ({ setPostId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then(({ data }) => setPosts(data));
  }, []);

  return (
    <div className={styles.PostsList}>
      {posts.map((post) => (
        <Post key={post.id} post={post} setPostId={setPostId} />
      ))}
    </div>
  );
};

export { Posts };
