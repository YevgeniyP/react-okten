import React from "react";
import CreateUserComponent from "./components/CreateUserComponent/CreateUserComponent";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <CreateUserComponent />
    </div>
  );
}

export default App;
