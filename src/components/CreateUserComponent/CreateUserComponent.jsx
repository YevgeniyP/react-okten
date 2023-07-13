import React, { useEffect, useRef, useState } from "react";
import styles from "./CreateUserComponent.module.css";

function CreateUserComponent() {
  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [createdUser, setCreatedUser] = useState();

  useEffect(() => {
    console.log(createdUser);
  }, [createdUser]);
  const handleForm = (event) => {
    event.preventDefault();

    const newUser = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    createNewUser(newUser);
  };

  const createNewUser = (user) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((createUser) => setCreatedUser(createUser));
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleForm}>
      <label className={styles.fromLabel}>
        Name
        <input type="text" ref={nameRef} className={styles.formInput} />
      </label>
      <label className={styles.fromLabel}>
        Username
        <input type="text" ref={usernameRef} className={styles.formInput} />
      </label>
      <label className={styles.fromLabel}>
        Email
        <input type="email" ref={emailRef} className={styles.formInput} />
      </label>
      <label className={styles.fromLabel}>
        Password
        <input type="password" ref={passwordRef} className={styles.formInput} />
      </label>
      <input type="submit" value="Submit" className={styles.btn} />
    </form>
  );
}

export default CreateUserComponent;
