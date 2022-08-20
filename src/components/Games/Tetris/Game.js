//Custom Hook
import { useGameOver } from "./hooks/useGameOver";

import Menu from "./Menu";
import GameOn from "./GameOn";

function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  function start() {
    setGameOver(false);
  }

  return (
    <div className="game">
      {gameOver ? (
        <Menu onClick={start} />
      ) : (
        <GameOn rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}

export default Game;
