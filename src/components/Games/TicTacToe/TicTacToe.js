import { useState, useEffect } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  //start with player X
  const [playerX, setPlayerX] = useState(true);
  //start with 9 available turns
  const [count, setCount] = useState(9);
  //set not over, aka in play
  const [isOver, setIsOver] = useState(false);
  //empty arrs to check if player has winning combo
  const [xArr, setXArr] = useState([]);
  const [oArr, setOArr] = useState([]);
  //set scores at zero to save if additional rounds are played
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  function handleSq(e) {
    e.preventDefault();

    //returns num of clicked square
    const id = e.target.id;

    //returns squares div in html
    const sq = document.getElementById(id);

    if (playerX && sq.innerText !== "X" && sq.innerText !== "O" && !isOver) {
      setPlayerX(false);
      sq.innerText = "X";
      setCount(count - 1);
      setXArr([`${id}`, ...xArr]);
    } else if (
      !playerX &&
      sq.innerText !== "X" &&
      sq.innerText !== "O" &&
      !isOver
    ) {
      setPlayerX(true);
      sq.innerText = "O";
      setCount(count - 1);
      setOArr([`${id}`, ...oArr]);
    }
    checkIfOver();
  }

  function checkIfOver() {
    if (count === 1) {
      setIsOver(true);
      setXArr([]);
      setOArr([]);
      alert("Cat's Game");
    }
  }

  useEffect(() => {
    const win1 = ["1", "2", "3"],
      win2 = ["4", "5", "6"],
      win3 = ["7", "8", "9"],
      win4 = ["1", "4", "7"],
      win5 = ["2", "5", "8"],
      win6 = ["3", "6", "9"],
      win7 = ["1", "5", "9"],
      win8 = ["3", "5", "7"];

    const checker = (arr, target) => target.every((v) => arr.includes(v));

    if (
      checker(xArr, win1) === true ||
      checker(xArr, win2) === true ||
      checker(xArr, win3) === true ||
      checker(xArr, win4) === true ||
      checker(xArr, win5) === true ||
      checker(xArr, win6) === true ||
      checker(xArr, win7) === true ||
      checker(xArr, win8) === true
    ) {
      setIsOver(true);
      alert("X WINS");
      setXScore(xScore + 1);
      setXArr([]);
      setOArr([]);
    } else if (
      checker(oArr, win1) ||
      checker(oArr, win2) ||
      checker(oArr, win3) ||
      checker(oArr, win4) ||
      checker(oArr, win5) ||
      checker(oArr, win6) ||
      checker(oArr, win7) ||
      checker(oArr, win8)
    ) {
      setIsOver(true);
      alert("O WINS");
      setOScore(oScore + 1);
      setXArr([]);
      setOArr([]);
    }
  }, [checkIfOver]);

  return (
    <div className="TTT">
      <h1>Tic-Tac-Toe</h1>
      <h3>SCORE AREA</h3>

      <div className="grid">
        <div className="row" id="row-1">
          <div className="sq" id="1" onClick={(e) => handleSq(e)}></div>
          <div className="sq" id="2" onClick={(e) => handleSq(e)}></div>
          <div className="sq" id="3" onClick={(e) => handleSq(e)}></div>
        </div>
        <div className="row" id="row-2">
          <div className="sq" id="4" onClick={(e) => handleSq(e)}></div>
          <div className="sq" id="5" onClick={(e) => handleSq(e)}></div>
          <div className="sq" id="6" onClick={(e) => handleSq(e)}></div>
        </div>
        <div className="row" id="row-3">
          <div className="sq" id="7" onClick={(e) => handleSq(e)}></div>
          <div className="sq" id="8" onClick={(e) => handleSq(e)}></div>
          <div className="sq" id="9" onClick={(e) => handleSq(e)}></div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
