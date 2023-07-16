import React, { createContext, useState } from "react";
import { Child1Component } from "./components/Child1/Child1Component";
import { Child2Component } from "./components/Child2/Child2Component";
import styles from "./App.module.css";

const AppContext = createContext(null);

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.wrapper}>
      <AppContext.Provider value={{ counter, setCounter }}>
        <Child1Component />
        <Child2Component />
      </AppContext.Provider>
    </div>
  );
};

export { App, AppContext };
