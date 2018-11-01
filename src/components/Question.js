import React from "react";

class Question extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Step 1: calling fetchQuestion");
    this.props.fetchQuestion();
  }

  render() {
    return (
      <div>
        <p>QUESTION:</p>
        <button>Answer A</button>
        <button>Answer B</button>
        <button>Answer C</button>
        <button>Answer D</button>
      </div>
    );
  }
}

export default Question;
