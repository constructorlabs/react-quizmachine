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

  result() {
    let image;
    if (this.props.status === "lose") {
      image = <iframe src="https://giphy.com/embed/gGn9eq3prU6m4" width="480" height="320" frameBorder="1" margin="150" className="main__score--image" allowFullScreen></iframe>
    } else if (this.props.status === "win") {
      <iframe src="https://giphy.com/embed/MOWPkhRAUbR7i" width="480" height="320" frameBorder="1" className="main__score--image" allowFullScreen></iframe>
    } else {
      image = <img className="main__score--image" src='minion.jpg' />
    }
    return image;
  }

  render() {

    return (
      <main className="main">
        <section className="main__score">
          <section className="main__score--money">
            <Money score={this.props.money}
              status={this.props.status}
              friend={this.props.friend}
              audience={this.props.audience}
              fifty={this.props.fifty}
              friendLine={this.props.friendLine}
              audienceLine={this.props.audienceLine}
              fiftyLine={this.props.fiftyLine}
              incorrectAnswerFn={this.props.incorrectAnswerFn}
            />
          </section>

          {this.result()}
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
              fifty={this.props.fifty}
              friend={this.props.friend}
            />
          );
        })}

      </main>
    );

  }
};

export default Question;