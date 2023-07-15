import React, { useEffect, useState } from "react";
import { UserItem } from "../UserItem/UserItem";

const UserComponent = ({ setSelectedUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} setSelectedUser={setSelectedUser} />
      ))}
    </div>
  );
};

export { UserComponent };
