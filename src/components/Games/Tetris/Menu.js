import React from "react";

function Menu({ onStart, onExit }) {
  return (
    <div className="menu">
      <div className="tetris-title">Jungle Tetris</div>

      <div className="button-cont">
        <button onClick={onStart}>start</button>
        <button onClick={onExit}>exit</button>
      </div>
    </div>
  );
}

export default Menu;
