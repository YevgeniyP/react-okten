import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const [createStatus, setCreateStatus] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm();

  const createUser = (data) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => setCreateStatus(() => true));
  };

  const onSubmit = (data) => {
    createUser(data);
    reset();
  };

  return (
    <div>
      <h2 className={styles.header}>Create user</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setCreateStatus(false)}
        className={styles.formWrapper}
      >
        <input
          className={styles.formInput}
          type="text"
          placeholder={"Username"}
          {...register("username", {
            required: true,
            min: 5,
            max: 30,
          })}
        />
        <input
          className={styles.formInput}
          type="email"
          placeholder={"Email"}
          {...register("email", { required: true })}
        />
        <input
          className={styles.formInput}
          type="password"
          placeholder={"Password"}
          {...register("password", { required: true })}
        />
        <input
          className={styles.formBtn}
          type="submit"
          value={"Submit"}
          disabled={!isValid}
        />
        {createStatus && <div className={styles.fromMessage}>User created</div>}
      </form>
    </div>
  );
};

export { UserForm };
