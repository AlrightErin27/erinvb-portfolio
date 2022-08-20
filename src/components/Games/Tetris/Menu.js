import React from "react";

function Menu({ onClick }) {
  return (
    <div className="menu">
      <div className="tetris-title">Jungle Tetris</div>

      <button onClick={onClick}>start</button>
    </div>
  );
}

export default Menu;
