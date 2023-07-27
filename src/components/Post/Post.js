import styles from "./Post.module.scss";

const Post = ({ post, setPostId }) => {
  const { id, title, body } = post;
  return (
    <div className={styles.Post}>
      <h3>
        {id}. {title}
      </h3>
      <p>{body}</p>
      <input type="button" value={"Comment"} onClick={() => setPostId(id)} />
    </div>
  );
};

export { Post };
