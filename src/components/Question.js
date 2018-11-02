import React from "react";
// const { fetchQuestion, currentQuestion } = this.props;

class Question extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Step 2. calling fetchQuestion");
    this.props.fetchQuestion();
  }

  render() {
    console.log(this.props.currentScore)
    return (
      <div>
        {Object.values(this.props.currentQuestion).length !== 0 && (
          <ul>
            <p>{this.props.currentQuestion.question}</p>
            {this.props.currentQuestion.options.map(option => (
              <li
                onClick={event => this.props.selectOption(event.target.textContent)}
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Question;
