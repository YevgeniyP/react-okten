import React, { useContext } from "react";
import { AppContext } from "../../App";

const SubChild22 = () => {
  const { setCounter } = useContext(AppContext);
  return (
    <div>
      <h3>SubChild22</h3>
      <input
        type="button"
        onClick={() => setCounter((prev) => prev + 1)}
        value={"Click"}
      />
      <input type="button" onClick={() => setCounter(0)} value={"Reset"} />
    </div>
  );
};

export { SubChild22 };
