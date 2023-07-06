import React, { useEffect, useState } from "react";
import UserItem from "../UserItem/UserItem";
import userComponent from "./UserComponent.module.css";

function UsersComponent() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <>
      <h1 className={userComponent.header}>Users list</h1>
      <div className={userComponent.wrapper}>
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            posts={posts.filter((post) => post.userId === user.id)}
          />
        ))}
      </div>
    </>
  );
}

export default UsersComponent;
