import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Step 1: calling fetchQuestion");
    this.props.questionFetch();
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.question.map(question => {
          return (
            <div key={question.question}>
              <p>{question.category}</p>
              <p>{question.difficulty.toUpperCase()}</p>
              <p>{question.question}</p>
            </div>
          );
        })}
        <form>
          <button
            type="submit"
            value="True"
            onClick={event => {
              this.props.answerClickHandle(event.target.value);
            }}
          >
            True
          </button>
          <button
            type="submit"
            value="False"
            onClick={event => {
              this.props.answerClickHandle(event.target.value);
            }}
          >
            False
          </button>
        </form>
      </div>
    );
  }
}

export default Question;
