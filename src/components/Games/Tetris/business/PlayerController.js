import { Action } from "./Input";
import { rotate } from "./Tetrominoes";
import { hasCollision, isWithinBoard } from "./Board";

const attemptRotation = ({ board, player, setPlayer }) => {
  const shape = rotate({
    piece: player.tetromino.shape,
    direction: 1,
  });

  const position = player.position;

  //check if piece is still on the board and if it has collided
  const isValidRotation =
    isWithinBoard({ board, position, shape }) &&
    !hasCollision({ board, position, shape });

  if (isValidRotation) {
    //set value to all prev vals & set the new tet shape
    setPlayer({
      ...player,
      tetromino: {
        ...player.tetromino,
        shape,
      },
    });
  } else {
    return false;
  }
};

export const movePlayer = ({ delta, position, shape, board }) => {
  //look ahead to see where the player will want to go next
  const desiredNextPosition = {
    row: position.row + delta.row,
    column: position.column + delta.column,
  };

  const collided = hasCollision({
    board,
    position: desiredNextPosition,
    shape,
  });

  //check to see if still in board
  const isOnBoard = isWithinBoard({
    board,
    position: desiredNextPosition,
    shape,
  });

  //prevent player from moving under certain circumstances:
  //if the tet is not on the board or if tet is on board but has collided
  const preventMove = !isOnBoard || (isOnBoard && collided);
  //prevent move makes you stay where you were, otherwise you can have that desired next position
  const nextPosition = preventMove ? position : desiredNextPosition;

  //keep track to see if player is moving down
  const isMovingDown = delta.row > 0;
  //if you are moving down and you go off board or collide = a hit
  //after a hit, we want to get the player back to the top of the board with a new tet
  const isHit = isMovingDown && (collided || !isOnBoard);

  return { collided: isHit, nextPosition };
};

export const attemptMovement = ({
  board,
  action,
  player,
  setPlayer,
  setGameOver,
}) => {
  const delta = { row: 0, column: 0 };
  let isFastDropping = false;

  if (action === Action.FastDrop) {
    isFastDropping = true;
  } else if (action === Action.SlowDrop) {
    //moves tet down 1 row ⬇
    delta.row += 1;
  } else if (action === Action.Left) {
    // ⬅
    delta.column -= 1;
  } else if (action === Action.Right) {
    //➡
    delta.column += 1;
  }

  const { collided, nextPosition } = movePlayer({
    delta,
    position: player.position,
    shape: player.tetromino.shape,
    board,
  });

  //did we collide immediately? if so-> GAME OVER MAN 😵
  const isGameOver = collided && player.position.row === 0;
  if (isGameOver) {
    setGameOver(isGameOver);
  }
  //otherwise setPlayer in state
  setPlayer({
    ...player,
    collided,
    isFastDropping,
    position: nextPosition,
  });
};

export const playerController = ({
  action,
  board,
  player,
  setPlayer,
  setGameOver,
}) => {
  //If button on keyboard pressed isn't assigned an action just return nuffin
  if (!action) return;

  if (action === Action.Rotate) {
    attemptRotation({ board, player, setPlayer });
  } else {
    attemptMovement({ board, player, setPlayer, action, setGameOver });
  }
};
