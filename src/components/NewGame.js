import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/NewGame.scss';

function NewGame({ getDifficulty, getTriviaType, startGame }) {
  return (
    <div className="new-game">
      <div className="new-game__title">Who Knows?</div>
      <div className="new-game__subtitle">
        A trivia game that you will probably end up playing while in the bathroom.
      </div>
      <div className="new-game__options">
        <div className="new-game__diff">
          <div className="new-game__choose-dif">Difficulty</div>
          <div className="new-game__buttons">
            {['easy', 'medium', 'hard'].map(item => (
              <button
                type="button"
                className="new-game__button"
                key={item}
                onClick={() => getDifficulty(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="new-game__type">
          <div className="new-game__choose-type">Question type</div>
          <div className="new-game__buttons">
            {['multiple', 'true/false', 'any'].map(item => (
              <button
                type="button"
                className="new-game__button"
                key={item}
                onClick={() => getTriviaType(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button type="button" className="new-game__button" onClick={startGame}>
        Start!
      </button>
    </div>
  );
}

NewGame.propTypes = {
  getDifficulty: PropTypes.func.isRequired,
  getTriviaType: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default NewGame;
