import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/GameOver.scss';

function GameOver({ getRestart }) {
  return (
    <div className="game-over">
      <div className="game-over__title">Game Over!</div>
      <button type="button" className="game-over__button" onClick={() => getRestart()}>
        Start again
      </button>
    </div>
  );
}

GameOver.propTypes = {
  getRestart: PropTypes.func.isRequired,
};

export default GameOver;
