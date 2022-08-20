//Custom Hook
import { useGameOver } from "./hooks/useGameOver";

import Menu from "./Menu";
import GameOn from "./GameOn";
import { useHistory } from "react-router-dom";

function Game({ rows, columns }) {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const history = useHistory();

  function start() {
    setGameOver(false);
  }
  function exit() {
    setGameOver(true);
    history.push("/projects");
  }

  return (
    <div className="game">
      {gameOver ? (
        <Menu onStart={start} onExit={exit} />
      ) : (
        <GameOn rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  );
}

export default Game;
