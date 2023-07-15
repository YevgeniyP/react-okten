import React from "react";

const UserItem = ({ user, setSelectedUser }) => {
  const { id, name, username, email, phone, website } = user;
  return (
    <div>
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <input
        type="button"
        value={"Show posts"}
        onClick={() => setSelectedUser(id)}
      />
    </div>
  );
};

export { UserItem };
