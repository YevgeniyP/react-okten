import React from "react";
import userDetails from "./UserDetails.module.css";

function UserDetails({ user }) {
  return (
    <div className={userDetails.wrapper}>
      <h2>{user.name}</h2>
      <p>
        <b>Username:</b> {user.username}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Phone:</b> {user.phone}
      </p>
      <p>
        <b>Website:</b> {user.website}
      </p>
    </div>
  );
}

export default UserDetails;
