import React from "react";
import { SubChild21 } from "../SubChild2_1/SubChild21";
import { SubChild22 } from "../SubChild2_2/SubChild22";

const Child2Component = () => {
  return (
    <div>
      <h2>Child Component 2</h2>
      <SubChild21 />
      <SubChild22 />
    </div>
  );
};

export { Child2Component };
