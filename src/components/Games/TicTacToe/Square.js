import React from "react";
import Circle from "./Circle";
import Cross from "./Cross";

function Square({ position, value, handleMove }) {
  function handleClick() {
    if (value === "") {
      handleMove(position);
    }
  }

  return (
    <div className="square" onClick={handleClick}>
      {value === "o" ? <Circle /> : ""}
      {value === "x" ? <Cross /> : ""}
    </div>
  );
}

export default Square;
