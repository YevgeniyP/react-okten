import { useEffect, useState } from "react";
import { Post } from "../Post/Post";

const Posts = ({ setCommentedPost, commentedPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [commentedPost]);

  return (
    <div>
      <h2>Posts List</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} setCommentedPost={setCommentedPost} />
      ))}
    </div>
  );
};

export { Posts };
