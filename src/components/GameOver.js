import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../../styles/components/GameOver.scss';

function GameOver({ sessionId, highScores, getRestart }) {
  return (
    <div className="game-over">
      <div className="game-over__title">Game Over!</div>
      <div className="game-over__scores-title">High Scores</div>
      <table className="game-over__high-scores">
        <thead>
          <tr className="game-over__scores-columns">
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map(item => {
            const classes = cx('row', { 'row--highlighted': item.id === sessionId });
            return (
              <tr className={classes} key={item.end_date}>
                <td>{item.username}</td>
                <td>{item.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" className="game-over__button" onClick={() => getRestart()}>
        Start again
      </button>
    </div>
  );
}

GameOver.propTypes = {
  sessionId: PropTypes.number.isRequired,
  highScores: PropTypes.array.isRequired,
  getRestart: PropTypes.func.isRequired,
};

export default GameOver;
