import React from "react";
import question from "../reducers/question";
import { decode } from 'he';

class Question extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchQuestion();
  }

  fetchNextQuestion(){
    setTimeout(this.props.fetchQuestion, 4000)
  }

  render() {
    const correctAnswer = this.props.question.correct_answer;

    return (
      <div>
        <p>{this.props.numberOfQuestions}/30</p>
        {this.props.question.question && (
          <div>
            <h2>{decode(this.props.question.question)} </h2>
            <p>Difficulty: {this.props.question.difficulty}</p>
            {this.props.question.answerArr.map(
              answer => (
                <button
                  key={answer}
                  onClick={() => {
                    this.props.receiveAnswer(answer, this.props.question);
                    this.fetchNextQuestion();
                  }}
                >
                  {decode(answer)}
                </button>
              )
            )}
            {this.props.correct === 'yes' && <h3>Correct! Well Done</h3>}
            {this.props.correct === 'no' && <h3>Incorrect! The correct answer was: {decode(correctAnswer)} </h3>}
          </div>
        )}
      </div>
    );
  }
}

export default Question;
