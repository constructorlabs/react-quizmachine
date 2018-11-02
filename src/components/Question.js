import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.questionFetch();
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="grid">
        <p>Score: {this.props.score}</p>
        {this.props.question.map(question => {
          if (question.type == "boolean") {
            return (
              <div key={question.question}>
                <p>{question.category}</p>
                <p>{question.difficulty.toUpperCase()}</p>
                <p>{question.question}</p>

                <div className="true-false-grid">
                  <button
                    className="voting-button button-one"
                    type="button"
                    value="True"
                    onClick={event => {
                      event.preventDefault();
                      this.props.answerClickHandle(event.target.value);
                    }}
                  >
                    True
                  </button>
                  <button
                    className="voting-button button-two"
                    type="button"
                    value="False"
                    onClick={event => {
                      this.props.answerClickHandle(event.target.value);
                    }}
                  >
                    False
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div key={question.question}>
                <p>{question.category}</p>
                <p>{question.difficulty.toUpperCase()}</p>
                <p>{question.question}</p>

                <div>
                  <button
                    className="voting-button"
                    type="button"
                    key={question.correct_answer}
                    value={question.correct_answer}
                    onClick={event => {
                      this.props.answerClickHandle(event.target.value);
                    }}
                  >
                    {question.correct_answer}
                  </button>

                  {question.incorrect_answers.map(answer => {
                    return (
                      <button
                        className="voting-button"
                        type="button"
                        key={answer}
                        value={answer}
                        onClick={event => {
                          this.props.answerClickHandle(event.target.value);
                        }}
                      >
                        {answer}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Question;
