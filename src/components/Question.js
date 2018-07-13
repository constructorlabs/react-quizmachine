import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    console.log("Step 1: calling fetchQuestion")
    this.props.fetchQuestion();
  }

  render() {

    return (
      <div>
        {(this.props.question !== undefined) ?
          <div>
            <div className="question__question">{decodeURIComponent(this.props.question.question)}</div>
            <div className="question__answers">{decodeURIComponent(this.props.question.correct_answer)}
              {(this.props.question.incorrect_answers).map(currentAnswer => { return currentAnswer })}


            </div>
          </div>


          :
          null
        }

      </div>
    );

  }
};

export default Question;