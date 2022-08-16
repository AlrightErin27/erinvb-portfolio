import "./tetris.css";
import Game from "./Game";
// import Board from "./Board";

function Tetris() {
  return (
    <div className="tetris">
      Tetris
      <Game rows={20} columns={10} />
    </div>
  );
}

export default Tetris;
