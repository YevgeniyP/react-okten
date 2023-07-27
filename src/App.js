import { CommentForm } from "./components/CommentForm/CommentForm";
import { useState } from "react";

import { Posts } from "./components/Posts/Posts";

const App = () => {
  const [postId, setPostId] = useState(null);
  return (
    <>
      <CommentForm postId={postId} setPostId={setPostId} />
      <Posts setPostId={setPostId} />
    </>
  );
};

export { App };
