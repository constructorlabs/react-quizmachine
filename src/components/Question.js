import React from "react";
import question from "../reducers/question";
const shuffle = require("shuffle-array");

class Question extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchQuestion();
  }

  randomizeAnswers(correctAnswer, incorrectAnswers) {
    const answerArray = incorrectAnswers.concat(correctAnswer);
    return shuffle(answerArray);
  }

  render() {
    const correctAnswer = this.props.question.correct_answer;
    const incorrectAnswers = this.props.question.incorrect_answers;

    return (
      <div>
        {this.props.question.question && (
          <div>
            <h2>{this.props.question.question} </h2>
            <p>Difficulty: {this.props.question.difficulty}</p>
            {this.randomizeAnswers(correctAnswer, incorrectAnswers).map(
              answer => (
                <button
                  key={answer}
                  onClick={() => {
                    this.props.receiveAnswer(answer, this.props.question);
                    this.props.fetchQuestion()
                  }}
                >
                  {answer}
                </button>
              )
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Question;
