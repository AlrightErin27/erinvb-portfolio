import React from "react";

function GameStats({ gameStats }) {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="game-stats game-stats__right">
      <li className="li-text">Level:</li>
      <li className="value">{level}</li>
      <li className="li-text">Lines to Level:</li>
      <li className="value">{linesToLevel}</li>
      <li className="li-text">Points:</li>
      <li className="value">{points}</li>
    </ul>
  );
}

export default React.memo(GameStats);
