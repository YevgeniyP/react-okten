import React, { useRef } from "react";
import styles from "./CommentComponent.module.css";

function CommentComponent({ id }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const bodyRef = useRef();

  const sendComment = (event) => {
    event.preventDefault();
    const newComment = {
      postId: id,
      name: nameRef.current.value,
      email: emailRef.current.value,
      body: bodyRef.current.value,
    };

    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  return (
    <div>
      <form onSubmit={sendComment} className={styles.formWrapper}>
        <label className={styles.formLabel}>
          Name
          <input type="text" ref={nameRef} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Email
          <input type="email" ref={emailRef} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Body
          <input type="text" ref={bodyRef} className={styles.formInput} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CommentComponent;
