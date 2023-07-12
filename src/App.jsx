import React, { useEffect, useState } from "react";
import UserComponent from "./components/UserComponent/UserComponent";
import PostComponent from "./components/PostComponent/PostComponent";

function App() {
  const [users, setUsers] = useState([]);
  const [selectId, setSelectId] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const selectPosts = (id) => setSelectId(id);

  return (
    <div>
      {users.map((user) => (
        <UserComponent key={user.id} user={user} selectId={selectPosts} />
      ))}
      {<PostComponent userId={selectId} />}
    </div>
  );
}

export default App;
