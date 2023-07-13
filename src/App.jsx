import React, { createContext } from "react";
import Child1Component from "./components/Child1/Child1Component";
import Child2Component from "./components/Child2/Child2Component";

export const AppContext = createContext(null);

function App() {
  return (
    <div>
      <AppContext.Provider value={"light"}>
        <Child1Component />
        <Child2Component />
      </AppContext.Provider>
    </div>
  );
}

export default App;
