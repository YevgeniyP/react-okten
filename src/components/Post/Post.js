const Post = ({ post, setCommentedPost }) => {
  const { id, title, body } = post;
  return (
    <div>
      <h3>
        {id}. {title}
      </h3>
      <p>{body}</p>
      <input
        type="button"
        value={"Send comment"}
        onClick={() => setCommentedPost(post.id)}
      />
    </div>
  );
};

export { Post };
