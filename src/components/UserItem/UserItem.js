import React, { useState } from "react";
import userItem from "./UserItem.module.css";
import UserPostComponent from "../UserPostComponent/UserPostComponent";

function UserItem({ user, posts }) {
  const [availablePosts, setAvailablePosts] = useState(false);
  return (
    <div className={userItem.wrapper}>
      <h2>{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h3>Address</h3>
      <p>City: {user.address.city}</p>
      <p>Street: {user.address.street}</p>
      <p>Suite: {user.address.suite}</p>
      <h3>Company</h3>
      <p>Name: {user.company.name}</p>
      <p>Catch phrase: {user.company.catchPhrase}</p>
      <button
        onClick={() => {
          !availablePosts ? setAvailablePosts(true) : setAvailablePosts(false);
        }}
      >
        {!availablePosts
          ? "Show posts of current user"
          : "Hide posts of current user"}
      </button>
      {availablePosts ? <UserPostComponent posts={posts} /> : ""}
    </div>
  );
}

export default UserItem;
