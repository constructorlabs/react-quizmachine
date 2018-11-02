import React from 'react';

function ScoreTable({currentScore, allScores}){

  return(
    <ul>
      {allScores.map(player => {
        return <li >{player.name} {player.score}</li>
      })}
    </ul>
  )
}

export default ScoreTable;
