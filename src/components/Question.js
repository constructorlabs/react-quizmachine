import Money from './Money';
import React from 'react';
import Questions from './Questions';

class Question extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (this.props.fetchQuestion !== undefined) {
      console.log("Step 1: calling fetchQuestion")
      this.props.fetchQuestion();
    }
  }

  result(winner) {
    while (winner !== undefined) {
      console.log("winner", winner)
      let insertResult;
      if (winner === true) {
        insertResult = <span> You won! </span>
      } else if (winner === false) {
        insertResult = <span> You go home ! </span>
      }
      return (insertResult)
    }
  }
  render() {
    let image;
    if (this.props.status === "lose") {
      image = <iframe src="https://giphy.com/embed/gGn9eq3prU6m4" width="480" height="320" frameBorder="1" margin="150" class="giphy-embed" allowFullScreen></iframe>
    } else if (this.props.status === "win") {
      <iframe src="https://giphy.com/embed/MOWPkhRAUbR7i" width="480" height="320" frameBorder="1" class="giphy-embed" allowFullScreen></iframe>
    } else {
      image = <img className="main__score--image" src='minion.jpg' />
    }

    return (
      <main className="main">
        <section className="main__score">
          <section className="main__score--money">
            <Money score={this.props.money}
              result={this.result} />
            {this.insertResult}
          </section>

          {image}

        </section>
        {this.props.question.map(quizItem => {

          return (

            <Questions
              key={quizItem}
              quizItem={quizItem}
              correctAnswerFn={this.props.correctAnswerFn}
              incorrectAnswerFn={this.props.incorrectAnswerFn}
              score={this.props.money}
              result={this.result}
            />
          );
        })}

      </main>
    );

  }
};

export default Question;