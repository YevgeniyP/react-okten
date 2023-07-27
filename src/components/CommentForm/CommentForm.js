import { useForm } from "react-hook-form";

import { commentService } from "../../services/commentService";
import styles from "./CommentForm.module.scss";

const CommentForm = ({ postId, setPostId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const create = (data) => {
    if (isValid && postId) {
      try {
        commentService
          .create({ ...data, postId })
          .then(({ data }) => console.log(data))
          .then(() => {
            reset();
            setPostId(null);
          });
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className={styles.CommentForm}>
      <h2>Send comment</h2>
      <form onSubmit={handleSubmit(create)}>
        <input
          type="text"
          placeholder={"Name"}
          {...register("name", {
            required: true,
          })}
        />
        <input
          type="text"
          placeholder={"Email"}
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Enter correct email",
            },
          })}
        />
        <input
          type="text"
          placeholder={"Body"}
          {...register("body", {
            required: true,
          })}
        />
        <input type="submit" value={"Send"} />
        <input type="reset" value={"Reset"} />
      </form>
      {errors.email && <p>{errors.email.message}</p>}
    </div>
  );
};

export { CommentForm };
