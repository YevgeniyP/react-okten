import React, { createContext, useState } from "react";
import { CommentForm } from "./components/CommentForm/CommentForm";
import { Posts } from "./components/Posts/Posts";
import styles from "./App.module.css";

const AppContext = createContext(null);

const App = () => {
  const [isSending, setIsSending] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className={styles.wrapper}>
      <AppContext.Provider
        value={{ isSending, setIsSending, selectedPost, setSelectedPost }}
      >
        <Posts />
        <CommentForm />
      </AppContext.Provider>
    </div>
  );
};

export { App, AppContext };
