//Custom Hook
import { useGameOver } from "./hooks/useGameOver";

import Menu from "./Menu";

function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    console.log("Started? ", gameOver);
  }

  return (
    <div className="game">
      <p>Rows: {rows}</p>
      <p>Columns: {columns}</p>
      <Menu onClick={start} />
    </div>
  );
}

export default Game;
