import { CommentForm } from "./components/CommentForm/CommentForm";
import { Posts } from "./components/Posts/Posts";
import { useState } from "react";

const App = () => {
  const [commentedPost, setCommentedPost] = useState(null);

  return (
    <div>
      <CommentForm
        commentedPost={commentedPost}
        setCommentedPost={setCommentedPost}
      />
      <Posts
        commentedPost={commentedPost}
        setCommentedPost={setCommentedPost}
      />
    </div>
  );
};

export { App };
