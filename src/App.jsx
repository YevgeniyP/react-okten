import React, { useEffect, useState } from "react";
import UsersComponent from "./components/UsersComponent/UsersComponent";
import app from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      <h1 className={app.header}>Users list</h1>
      <div className={app.wrapper}>
        {users.map((user) => (
          <UsersComponent key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default App;
