import Exit from "./Exit";

function Result({ winner, reset }) {
  return (
    <div className="result">
      {winner === "x" || winner === "o" ? (
        <p>🎈 player {winner} wins! 🎈</p>
      ) : (
        <p>🐾 cat's game! 🐾</p>
      )}

      <div className="btn-container">
        <button className="g-btn" onClick={reset}>
          Play Again
        </button>
        <Exit />
      </div>
    </div>
  );
}

export default Result;
