import React from "react";
import question from "../reducers/question";
import { decode } from "he";

class Question extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.difficulty);
    this.props.initializeStateScoreboard(this.props.difficulty)
  }

  fetchNextQuestion() {
    setTimeout(() => this.props.fetchQuestion(this.props.difficulty), 1500);
  }

  goToScoreboard() {
    setTimeout(() => this.props.receiveView("scoreboard"), 2000)
  }

  render() {
    const correctAnswer = this.props.question.correct_answer;

    return (
      <div>
        <p>
          {this.props.numberOfQuestions}
          /20
        </p>
        {this.props.question.question && (
          <div>
            <h2>{decode(this.props.question.question)} </h2>
            {this.props.difficulty === "" && (
              <p>Difficulty: {this.props.question.difficulty}</p>
            )}
            {this.props.question.answerArr.map(answer => (
              <button
                key={answer}
                disabled={this.props.correct}
                onClick={() => {
                  this.props.receiveAnswer(
                    answer,
                    this.props.question,
                    this.props.difficulty
                  );
                  this.props.numberOfQuestions >= 20
                    ? this.goToScoreboard()
                    : this.fetchNextQuestion();
                }}
              >
                {decode(answer)}
              </button>
            ))}
            {this.props.correct === "yes" && (
              <div>
                {" "}
                <p>Correct! Well Done</p>{" "}
                <img src="https://media.giphy.com/media/mPIA4KZVXv0ty/giphy.gif" />
              </div>
            )}
            {this.props.correct === "no" && (
              <div>
                <p>
                  Incorrect! The correct answer was: {decode(correctAnswer)}{" "}
                </p>
                <img src="https://media.giphy.com/media/hPPx8yk3Bmqys/giphy.gif" />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Question;
