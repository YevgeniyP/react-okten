import React, { useContext } from "react";
import { AppContext } from "../../App";

function SubChild12() {
  const theme = useContext(AppContext);

  return (
    <div>
      SubChild12
      <h2>Theme: {theme}</h2>
    </div>
  );
}

export default SubChild12;
