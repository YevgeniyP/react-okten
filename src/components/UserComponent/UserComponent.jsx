import React from "react";

function UserComponent({ user, selectId }) {
  const { id, name, email, website, phone } = user;
  return (
    <div>
      <h2>{name}</h2>
      <p>
        <b>Email: </b>
        {email}
      </p>
      <p>
        <b>Website: </b>
        {website}
      </p>
      <p>
        <b>Phone: </b>
        {phone}
      </p>
      <button onClick={() => selectId(id)}>Show Posts</button>
    </div>
  );
}

export default UserComponent;
