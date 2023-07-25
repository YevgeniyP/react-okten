import { useState } from "react";

const CommentForm = ({ commentedPost, setCommentedPost }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [body, setBody] = useState(null);

  const create = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        postId: commentedPost,
        name,
        email,
        body,
      }),
    })
      .then((response) => response.json)
      .then(() => {
        setCommentedPost(null);
        setName(null);
        setEmail(null);
        setBody(null);
      });
  };

  return (
    <div>
      <h2>Send comment</h2>
      <form onSubmit={create}>
        <input
          type="text"
          placeholder={"Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder={"Comment"}
          onChange={(e) => setBody(e.target.value)}
        />
        <input type="submit" value={"Submit"} disabled={!commentedPost} />
        <input type="reset" value={"Reset"} />
      </form>
    </div>
  );
};

export { CommentForm };
