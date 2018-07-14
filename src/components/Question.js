import React from 'react';
import Questions from './Questions';
import Money from './Money';

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

  render() {

    return (
      <main className="main">
        <section className="main__score">
          <section className="main__score--image">
            <img src="http://placepuppy.net/150/200" />
          </section>
          <section className="main__score--money">
            <Money score={this.props.money} />
          </section>

        </section>
        {this.props.question.map(quizItem => {

          return (

            <Questions
              key={quizItem}
              quizItem={quizItem}
              correctAnswerFn={this.props.correctAnswerFn}
              incorrectAnswerFn={this.props.incorrectAnswerFn}
            />
          );
        })}

      </main>
    );

  }
};

export default Question;