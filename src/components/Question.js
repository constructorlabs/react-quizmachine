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

  //Displays different Gifs depending on right/wrong answers
  // result() {
  //   let image, listen;

  //   if (this.props.status === "lose") {
  //     image = <iframe src="https://giphy.com/embed/gGn9eq3prU6m4" onerror="this.src='minion.jpg'" width="480" height="320" margin="150" className="main__score--image" allowFullScreen>
  //     </iframe>;

  //     // listen = <audio autoPlay>
  //     //   <source src="wrong.mp3" type="audio/mpeg" controls />
  //     // </audio>

  //   } else if (this.props.status === "win") {
  //     image = <iframe src="https://giphy.com/embed/MOWPkhRAUbR7i" alt='src=minion.jpg' width="480" height="320" className="main__score--image" allowFullScreen></iframe>;

  //     // listen = <audio autoPlay>
  //     //   <source src="right.mp3" type="audio/mpeg" controls />
  //     // </audio>

  //   } else {
  //     image = <img className="main__score--image" src='minion.jpg' />
  //   }
  //   return image, listen;
  // }
  // result() {
  //   if (this.props.status === "lose") {
  //     return (<div><iframe src="https://giphy.com/embed/gGn9eq3prU6m4" width="480" height="320" frameBorder="1" margin="150" className="main__score--image" allowFullScreen>
  //     </iframe>
  //       <audio autoPlay>
  //         <source src="wrong.mp3" type="audio/mpeg" />
  //       </audio>
  //     </div>)

  //   }
  //   else if (this.props.status === "win") {
  //     return (<div><iframe src="https://giphy.com/embed/MOWPkhRAUbR7i" width="480" height="320" frameBorder="1" className="main__score--image"> </iframe>
  //       <audio autoPlay>
  //         <source src="right.mp3" type="audio/mpeg" />
  //       </audio>
  //     </div>)
  //   }
  //   else {
  //     return (<img className="main__score--image" src='minion.jpg' />)

  //   }

  // }
  play(tune) {
    <audio autoPlay>
      <source src={tune} type="audio/mpeg" />
    </audio>
  }
  result() {
    switch (this.props.status) {
      case "lose":
        return (<div><iframe src="https://giphy.com/embed/gGn9eq3prU6m4" width="480" height="320" frameBorder="1" margin="150" className="main__score--image" allowFullScreen>
        </iframe>
          <audio autoPlay>
            <source src="wrong.mp3" type="audio/mpeg" />
          </audio>

          {/* {this.play("wrong.mp3")} */}
        </div>)

      case "win":
        return (<div><iframe src="https://giphy.com/embed/MOWPkhRAUbR7i" width="480" height="320" frameBorder="1" className="main__score--image"> </iframe>
          <audio autoPlay>
            <source src="right.mp3" type="audio/mpeg" />
          </audio>
        </div>)
      default:
        return (<img className="main__score--image" src='minion.jpg' />)
    }
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
              walkFn={this.props.walkFn}
            />
          </section>

          {this.result()}
        </section>

        <Questions
          key={this.props.quizData}
          quizData={this.props.quizData}
          correctAnswerFn={this.props.correctAnswerFn}
          incorrectAnswerFn={this.props.incorrectAnswerFn}
          score={this.props.money}
          result={this.result}
          fifty={this.props.fifty}
          fiftyLine={this.props.fiftyLine}
        />


        <audio >
          <source src="background.mp3" type="audio/mpeg" controls />
        </audio>
        {/* <button onClick={event => { this.props.fetchQuestion() }}>Next Contestant</button> */}
      </main>

    );

  }
};

export default Question;