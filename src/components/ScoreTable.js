import React from 'react';

function ScoreTable({currentScore, allScores, restart}){

  return(
    <div>
    <ul>
      {allScores.map(player => {
        return <li >{player.name}: {player.score} points</li>
      })}
    </ul>
    <button onClick={restart}>Play again</button>
    </div>
  )
}

export default ScoreTable;
