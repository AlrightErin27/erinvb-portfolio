import "./tetris.css";
import Game from "./Game";

function Tetris() {
  return (
    <div className="tetris">
      <Game rows={20} columns={10} />
    </div>
  );
}

export default Tetris;
