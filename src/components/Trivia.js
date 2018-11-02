import React from 'react';
import PropTypes from 'prop-types';
import AnswersContainer from '../containers/AnswersContainer';
import '../../styles/components/Trivia.scss';

function Trivia({ score, difficulty, lives, trivia }) {
  return (
    <div>
      <div className="trivia__title">Who Knows?</div>
      <div className="stats">
        <div className="stats__score">Score: {score}</div>
        <div className="stats__level">Level: {difficulty}</div>
        <div className="stats__lives">Lives: {lives}</div>
      </div>
      <div className="trivia__wrapper">
        <div className="trivia">
          <div className="trivia__category">{trivia.category}</div>
          <div className="trivia__question">{trivia.question}</div>
          <AnswersContainer />
        </div>
      </div>
    </div>
  );
}

Trivia.propTypes = {
  trivia: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  lives: PropTypes.number.isRequired,
};

export default Trivia;
