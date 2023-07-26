import { useForm } from "react-hook-form";

import { userService } from "../../services/userService";
import styles from "./UserForm.module.scss";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const create = async (data) => {
    try {
      await userService
        .create(data)
        .then((response) => console.log(response.data));
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.UserForm}>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit(create)}>
        <input
          type="text"
          placeholder={"Username"}
          {...register("username", {
            required: true,
            pattern: {
              value: /^[a-zA-Z\-0-9]+$/,
              message: "Only characters A-Z, a-z and '-' are  acceptable.",
            },
            minLength: {
              value: 5,
              message: "Min length 8 char.",
            },
          })}
        />
        <input
          type="text"
          placeholder={"Email"}
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Isn't email.",
            },
          })}
        />
        <input
          type="password"
          placeholder={"Password"}
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Min length 8 char.",
            },
            pattern: {
              value: /^[a-zA-Z\-0-9]+$/,
              message: "Password main contain chars 0-9, a-z, A-Z.",
            },
          })}
        />
        <input type="submit" value={"Submit"} disabled={!isValid} />
        <input type="reset" value={"Reset"} />
      </form>
      {!isValid && (
        <div>
          {errors.username && <p>{errors.username.message}</p>}
          {errors.email && <p>{errors.email.message}</p>}
          {errors.password && <p>{errors.password.message}</p>}
        </div>
      )}
    </div>
  );
};

export { UserForm };
