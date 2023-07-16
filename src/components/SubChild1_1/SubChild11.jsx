import React, { useContext } from "react";
import { AppContext } from "../../App";

const SubChild11 = () => {
  const { counter } = useContext(AppContext);
  return (
    <div>
      <h3>SubChild11</h3>
      <p>Counter: {counter}</p>
    </div>
  );
};

export { SubChild11 };
