import React from 'react';
import '../style/ScoreTable.scss';

function ScoreTable({currentScore, allScores, restart}){

  return(
    <div>
      <h3>Quiz Citizens Premier League Table</h3>
    <ol>
      {allScores.map(player => {
        return <li >{player.name}: {player.score} points</li>
      })}
    </ol>
    <button onClick={restart}>Play again</button>
    </div>
  )
}

export default ScoreTable;
