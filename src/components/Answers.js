import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../../styles/components/Answers.scss';

function Answers({ answers, response, getResponse }) {
  return (
    <div className="answers">
      {answers.map((answer) => {
        const classes = cx('answer', {
          'answer--green': response && response.content === answer.content && answer.correct,
          'answer--red': response && response.content === answer.content && !answer.correct,
        });
        return (
          <button
            type="button"
            className={classes}
            key={answer.content}
            onClick={() => getResponse(answer)}
          >
            {answer.content}
          </button>
        );
      })}
    </div>
  );
}

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  response: PropTypes.object.isRequired,
  getResponse: PropTypes.func.isRequired,
};

export default Answers;
