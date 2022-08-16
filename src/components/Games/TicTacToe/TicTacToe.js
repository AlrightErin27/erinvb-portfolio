import { useState, useEffect } from "react";

import "./TicTacToe.css";
import Square from "./Square";
import Result from "./Result";
import Exit from "./Exit";

function TicTacToe() {
  const [player, setPlayer] = useState("x");
  const [positions, setPositions] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [winner, setWinner] = useState(null);

  //check positions
  function checkPositions(pst1, pst2, pst3, playerType) {
    if (
      positions[pst1] === playerType &&
      positions[pst2] === playerType &&
      positions[pst3] === playerType
    ) {
      return true;
    }
    return false;
  }

  function decision() {
    //3 x's at consecutive columns
    if (checkPositions(0, 3, 6, "x")) return "x";
    if (checkPositions(1, 4, 7, "x")) return "x";
    if (checkPositions(2, 5, 8, "x")) return "x";
    //3 x's at consecutive rows
    if (checkPositions(0, 1, 2, "x")) return "x";
    if (checkPositions(3, 4, 5, "x")) return "x";
    if (checkPositions(6, 7, 8, "x")) return "x";
    //3 x's diagonally
    if (checkPositions(0, 4, 8, "x")) return "x";
    if (checkPositions(2, 4, 6, "x")) return "x";
    //3 o's at consecutive columns
    if (checkPositions(0, 3, 6, "o")) return "o";
    if (checkPositions(1, 4, 7, "o")) return "o";
    if (checkPositions(2, 5, 8, "o")) return "o";
    //3 o's at consecutive rows
    if (checkPositions(0, 1, 2, "o")) return "o";
    if (checkPositions(3, 4, 5, "o")) return "o";
    if (checkPositions(6, 7, 8, "o")) return "o";
    //3 o's diagonally
    if (checkPositions(0, 4, 8, "o")) return "o";
    if (checkPositions(2, 4, 6, "o")) return "o";
    //if no match => tie
    if (positions.every((pst) => pst !== "")) return "Cat's Game";

    return null;
  }

  function handleMove(position) {
    //spread thru original empty arr
    const updatedPositions = [...positions];
    //change player's position in temp arr by index
    updatedPositions[position] = player;

    //set new position into state
    setPositions(updatedPositions);
    //check who played last and change x/o accordingly
    setPlayer((prePlayer) => (prePlayer === "x" ? "o" : "x"));
  }

  //function runs constantly checking to see if a decision is made
  useEffect(() => {
    setWinner(decision());
  }, [handleMove]);

  function reset() {
    setPositions(["", "", "", "", "", "", "", "", ""]);
    setPlayer("x");
    setWinner(null);
  }

  return (
    <div className="TTT">
      <h1>
        <p className="t">T</p>
        <p className="t-t">I</p>
        <p className="t">C</p>

        <p className="t-t">T</p>
        <p className="t">A</p>
        <p className="t-t">C</p>

        <p className="t">T</p>
        <p className="t-t">O</p>
        <p className="t">E</p>
      </h1>

      <div>
        {winner ? (
          <Result reset={reset} winner={winner} />
        ) : (
          <div className="game">
            <div className="ttt-board">
              {positions.map((pst, idx) => {
                return (
                  <Square
                    key={idx * 88786}
                    position={idx}
                    value={pst}
                    handleMove={handleMove}
                  />
                );
              })}
            </div>

            <div className="btn-container">
              <button className="g-btn" onClick={reset}>
                reset
              </button>

              <Exit />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TicTacToe;
