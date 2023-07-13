import React from "react";
import SubChild11 from "../SubChild1_1/SubChild11";
import SubChild12 from "../SubChild1_2/SubChild12";

function Child1Component() {
  return (
    <div>
      Child Component 1
      <SubChild11 />
      <SubChild12 />
    </div>
  );
}

export default Child1Component;
