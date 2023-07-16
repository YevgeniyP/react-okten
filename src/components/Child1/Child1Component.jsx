import React from "react";
import { SubChild11 } from "../SubChild1_1/SubChild11";
import { SubChild12 } from "../SubChild1_2/SubChild12";

const Child1Component = () => {
  return (
    <div>
      <h2>Child Component 1</h2>
      <SubChild11 />
      <SubChild12 />
    </div>
  );
};

export { Child1Component };
