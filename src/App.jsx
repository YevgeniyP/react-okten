import React, { useState } from "react";
import { UserComponent } from "./components/UserComponent/UserComponent";
import { PostComponent } from "./components/PostComponent/PostComponent";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div>
      <UserComponent setSelectedUser={setSelectedUser} />
      <PostComponent selectedUser={selectedUser} />
    </div>
  );
};

export { App };
