import React from "react";
import question from "../reducers/question";
import { decode } from "he";

class Question extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.difficulty);
  }

  fetchNextQuestion() {
    setTimeout(() => this.props.fetchQuestion(this.props.difficulty), 4000);
  }

  render() {
    const correctAnswer = this.props.question.correct_answer;

    return (
      <div>
        <p>
          {this.props.numberOfQuestions}
          /30
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
                  this.props.receiveAnswer(answer, this.props.question, this.props.difficulty);
                  this.fetchNextQuestion();
                }}
              >
                {decode(answer)}
              </button>
            ))}
            {this.props.correct === "yes" && <h3>Correct! Well Done</h3>}
            {this.props.correct === "no" && (
              <p>
                Incorrect! The correct answer was: {decode(correctAnswer)}{" "}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Question;
