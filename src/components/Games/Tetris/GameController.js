import { Action, actionForKey } from "./business/Input";
import { playerController } from "./business/PlayerController";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  //Press Up Arrow
  function onKeyUp({ code }) {
    //   if (action === Action.Quit) {
    //     setGameOver(true);
    //   }
  }

  //Press Down Arrow
  function onKeyDown({ code }) {
    const action = actionForKey(code);
    handleInput({ action });
  }

  function handleInput({ action }) {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  }

  return (
    <input
      autoFocus
      className="game-controller"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    />
  );
};
export default GameController;
