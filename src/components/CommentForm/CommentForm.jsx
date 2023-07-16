import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../App";
import styles from "./CommentFrom.module.css";

const CommentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
    setFocus,
  } = useForm();

  const { setIsSending, selectedPost, setSelectedPost } =
    useContext(AppContext);
  const onSubmit = (data) => {
    createComment(data);
    setIsSending(true);
    setSelectedPost(null);
    reset();
  };

  const createComment = (data) => {
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...data,
        postId: selectedPost,
      }),
    })
      .then((response) => {
        if (response.status !== 201) {
          throw new Error();
        }
        return response.json();
      })
      .then((response) => console.log(response));
  };

  useEffect(() => {
    setFocus("name");
  }, [selectedPost]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Create new comment</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setIsSending(false)}
        className={styles.formWrapper}
      >
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder={"Name"}
          className={styles.formInput}
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder={"Email"}
          className={styles.formInput}
        />
        <input
          type="text"
          {...register("body", { required: true })}
          placeholder={"Comment"}
          className={styles.formInput}
        />
        <input
          type="submit"
          value={"Submit"}
          disabled={!(!!selectedPost && isValid)}
          className={styles.formBtn}
        />
      </form>
    </div>
  );
};

export { CommentForm };
