import React from "react";

function Menu({ onClick }) {
  return (
    <div className="menu">
      <button onClick={onClick}>start</button>
    </div>
  );
}

export default Menu;
