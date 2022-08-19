import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";

export const buildBoard = ({ rows, columns }) => {
  const builtRows = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => ({ ...defaultCell }))
  );

  return {
    rows: builtRows,
    size: { rows, columns },
  };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position } = player;

  //copy & clear spots used by tets that
  //hadn't collided & occupied spots permanently
  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...defaultCell }))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position,
    rows,
    shape: tetromino.shape,
  });

  //if we have collided-> reset the player
  if (player.collided || player.isFastDropping) {
    resetPlayer();
  }

  //return the next board
  return {
    rows,
    size: { ...board.size },
  };
};

export const hasCollision = ({ board, position, shape }) => {
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;

        if (
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

export const isWithinBoard = ({ board, position, shape }) => {
  //go thru each row of shape
  for (let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    //go thru shape's columns
    for (let x = 0; x < shape[y].length; x++) {
      //if the row and column at this position has 1's
      if (shape[y][x]) {
        //look within board and see if this new position in valid
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column];
        //if this isn't possible it returns false
        if (!isValidPosition) return false;
      }
    }
  }
  return true;
};
