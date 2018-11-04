import React from "react";
import {decode} from 'he';
import '../style/Question.scss';
// const { fetchQuestion, currentQuestion } = this.props;

class Question extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Step 2. calling fetchQuestion");
    this.props.fetchQuestion(Object.keys(this.props.category)[0]);
  }

  render() {

    return (
      <div className='question'>
        {Object.values(this.props.currentQuestion).length !== 0 && (
          <div>
            <h3>{decode(this.props.currentQuestion.question)}</h3>
            {this.props.currentQuestion.options.map(option => (
              <div>
              <input type='checkbox'
                id='toggle'
                onClick={event => {
                  this.props.selectOption(option)
                }}
                key={option}
              />
                <label htmlFor='toggle'> {decode(option)}</label>
              </div>
            ))}
          </div>
        )}
        <p>Difficulty: {this.props.question.difficulty}</p>
        <p>Points: {this.props.currentScore}</p>
      </div>
    );
  }
}

export default Question;
