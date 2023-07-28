import { useEffect, useState } from "react";

import { postService } from "../../services/postService";
import { useParams } from "react-router-dom";

const PostComponent = () => {
  const [post, setPost] = useState({});

  const { postId } = useParams();

  useEffect(() => {
    if (postId) {
      try {
        postService.getById(postId).then(({ data }) => setPost(data));
      } catch {}
    }
  }, [postId]);
  const { id, title, body } = post;

  return (
    <div>
      {postId && (
        <>
          <h3>
            {id}. {title}
          </h3>
          <p>{body}</p>
        </>
      )}
    </div>
  );
};

export { PostComponent };
