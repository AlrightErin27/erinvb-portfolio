import Board from "./Board";
import GameStats from "./GameStats";
import Previews from "./Previews";

import { useBoard } from "./hooks/useBoard";
import { useGameStats } from "./hooks/useGameStats";
import { usePlayer } from "./hooks/usePlayer";

function GameOn({ rows, columns, setGameOver }) {
  const [gameStats, addLinesCleared] = useGameStats();
  const [board, setBoard] = useBoard({ rows, columns });
  const [player, setPlayer, resetPlayer] = usePlayer();

  return (
    <div className="game-on">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
    </div>
  );
}

export default GameOn;
