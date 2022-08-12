import React from "react";

function Result({ winner, reset }) {
  return (
    <div className="result">
      {winner === "x" || winner === "o" ? (
        <p>🎈 player {winner} wins! 🎈</p>
      ) : (
        <p>🐾 cat's game! 🐾</p>
      )}
      <button className="g-btn" onClick={reset}>
        Play Again
      </button>
    </div>
  );
}

export default Result;
