import Board from "./Board";

import { useBoard } from "./hooks/useBoard";

function GameOn({ rows, columns, setGameOver }) {
  const [board, setBoard] = useBoard({ rows, columns });

  return (
    <div className="game-on">
      <Board board={board} />
    </div>
  );
}

export default GameOn;
