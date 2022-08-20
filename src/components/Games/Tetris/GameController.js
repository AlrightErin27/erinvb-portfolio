import { Action, actionForKey, actionIsDrop } from "./business/Input";
import { playerController } from "./business/PlayerController";
import { useInterval } from "./hooks/useInterval";
import { useDropTime } from "./hooks/useDropTime";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer,
}) => {
  //set up so we can use unique speed dictated in game stats
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats,
  });

  //set value for interval
  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  //Press Up Arrow
  function onKeyUp({ code }) {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  }

  //Press Down Arrow
  function onKeyDown({ code }) {
    const action = actionForKey(code);
    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      handleInput({ action });
    }
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
