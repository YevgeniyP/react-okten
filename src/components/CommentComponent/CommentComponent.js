import { useEffect, useState } from "react";

import { commentService } from "../../services/commentService";
import { Comment } from "./Comment/Comment";
import styles from "./CommentComponent.module.scss";

const CommentComponent = ({ setSelectPost }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    try {
      commentService.getAll().then(({ data }) => setComments(data));
    } catch {}
  }, []);
  return (
    <div className={styles.wrapper}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          setSelectPost={setSelectPost}
        />
      ))}
    </div>
  );
};

export { CommentComponent };
