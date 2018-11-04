import React from "react";
import question from "../reducers/question";
import { decode } from "he";

class Question extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.difficulty);
    this.props.initializeStateScoreboard(this.props.difficulty);
  }

  fetchNextQuestion() {
    setTimeout(() => this.props.fetchQuestion(this.props.difficulty), 1500);
  }

  goToScoreboard() {
    setTimeout(() => this.props.receiveView("scoreboard"), 2000);
  }

  render() {
    const correctAnswer = this.props.question.correct_answer;

    return (
      <div className="question__container">
        <p className="question__number">
          {this.props.numberOfQuestions}
          /20
        </p>
        {this.props.question.question && (
          <div className="question__question__container">
            <h2 className="question__question__question">
              {decode(this.props.question.question)}{" "}
            </h2>
            {this.props.difficulty === "" && (
              <p>Difficulty: {this.props.question.difficulty}</p>
            )}
            {this.props.question.answerArr.map(answer => (
              <button
                key={answer}
                disabled={this.props.correct}
                className={
                  !this.props.correct
                    ? "question__answer__button"
                    : answer === correctAnswer
                      ? "question__answer__button--correct"
                      : "question__answer__button--incorrect"
                }
                onClick={() => {
                  this.props.receiveAnswer(
                    answer,
                    this.props.question,
                    this.props.difficulty
                  );
                  this.props.numberOfQuestions >= 1
                    ? this.goToScoreboard()
                    : this.fetchNextQuestion();
                }}
              >
                {decode(answer)}
              </button>
            ))}
            {this.props.correct === "yes" && (
              <div className="question__correct">
                {" "}
                <p className="question__correct__text">
                  Correct! Well Done
                </p>{" "}
                <img
                  className="question__correct__image"
                  src="https://media.giphy.com/media/mPIA4KZVXv0ty/giphy.gif"
                />
              </div>
            )}
            {this.props.correct === "no" && (
              <div className="question__incorrect">
                <p className="question__incorrect__text">
                  Incorrect! The correct answer was: {decode(correctAnswer)}{" "}
                </p>
               <img
                  className="question__incorrect__image"
                  src="https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif"
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Question;
