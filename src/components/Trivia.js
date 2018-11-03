import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AnswersContainer from '../containers/AnswersContainer';
import '../../styles/components/Trivia.scss';

function Trivia({ score, difficulty, lives, trivia, gifUrl }) {
  const gifClasses = cx('trivia__gif', { 'trivia__gif--visible': gifUrl });
  const triviaClasses = cx('trivia__card', { 'trivia__card--hidden': gifUrl });
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
          <div className={triviaClasses}>
            <div className="trivia__category">{trivia.category}</div>
            <div className="trivia__question">{trivia.question}</div>
            <AnswersContainer />
          </div>
          <div className={gifClasses}>
            <img className="trivia__img" src={gifUrl} alt="" />
          </div>
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
  gifUrl: PropTypes.string.isRequired,
};

export default Trivia;
