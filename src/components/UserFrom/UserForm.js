import { useState } from "react";

import styles from "./UserForm.module.css";

const UserForm = () => {
  const [createStatus, setCreateStatus] = useState(false);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createUser = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((user) => console.log(user))
      .then(() => setCreateStatus(() => true));
  };

  return (
    <div>
      <h2 className={styles.header}>Create user</h2>
      <form
        onSubmit={createUser}
        onChange={() => setCreateStatus(false)}
        className={styles.formWrapper}
      >
        <input
          className={styles.formInput}
          type="text"
          placeholder={"Username"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.formInput}
          type="email"
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.formInput}
          type="password"
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className={styles.formBtn} type="submit" value={"Submit"} />
        {createStatus && <div className={styles.fromMessage}>User created</div>}
      </form>
    </div>
  );
};

export { UserForm };
