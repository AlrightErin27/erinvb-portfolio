import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";
import GameController from "./GameController";
import Key from "./Key";

import { useBoard } from "./hooks/useBoard";
import { useGameStats } from "./hooks/useGameStats";
import { usePlayer } from "./hooks/usePlayer";

function GameOn({ rows, columns, setGameOver }) {
  const [gameStats, addLinesCleared] = useGameStats();

  const [player, setPlayer, resetPlayer] = usePlayer();

  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <div className="game-on">
      <Board board={board} />
      <Key />
      <GameStats gameStats={gameStats} />
      <div className="previews-cont">
        <Previews tetrominoes={player.tetrominoes} />
      </div>
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </div>
  );
}

export default GameOn;
