import React from "react";
import Difficulty from "./Difficulty";
import Category from "./Category";
import GameOver from "./GameOver";
import cx from "classnames";
class QuestionMap extends React.Component {
  constructor() {
    super();

    this.state = {
      difficulty: "",
      category: "",
      displayDiff: true,
      displayCat: true,
      displayScore: false,
      potentialScore: 30,
    };

    this.difficultyHandleClick = this.difficultyHandleClick.bind(this);
    this.categoryHandleClick = this.categoryHandleClick.bind(this);
  }

  difficultyHandleClick(value) {
    if (value == "") {
      this.setState({
        difficulty: value,
        displayDiff: !this.state.displayDiff,
      });
    } else if (value == "easy") {
      this.setState({
        difficulty: value,
        displayDiff: !this.state.displayDiff,
        potentialScore: 10,
      });
    } else if (value == "medium") {
      this.setState({
        difficulty: value,
        displayDiff: !this.state.displayDiff,
        potentialScore: 20,
      });
    } else if (value == "hard") {
      this.setState({
        difficulty: value,
        displayDiff: !this.state.displayDiff,
        potentialScore: 30,
      });
    }
  }

  categoryHandleClick(value) {
    this.setState(
      {
        category: value,
        displayCat: !this.state.displayCat,
        displayScore: !this.state.displayScore,
      },
      () => this.props.questionFetch(this.state.difficulty, this.state.category)
    );
  }

  render() {
    const difficultyClassSwitch = cx("difficulty-div", {
      "difficulty-div--off": this.state.displayDiff == false,
    });
    const categoryClassSwitch = cx("category-div", {
      "category-div--off": this.state.displayCat == false,
    });

    const scoreClassSwitch = cx("score-div", {
      "score-div--on": this.state.displayScore == true,
    });

    console.log("props", this.props);

    if (this.props.questionCount <= 10) {
      return (
        <div className="grid">
          <div className="center">
            <h1>TRUTHY OR FALSY</h1>
            <div className={difficultyClassSwitch}>
              <Difficulty handleClick={this.difficultyHandleClick} />
            </div>
            <br />
            <div className={categoryClassSwitch}>
              <Category handleClick={this.categoryHandleClick} />
            </div>
            <div className={scoreClassSwitch}>
              <p>
                Score: {this.props.score}/{this.state.potentialScore}
              </p>
              <p>
                question {this.props.questionCount}
                /10
              </p>
            </div>
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
                          this.props.answerClickHandle(
                            event.target.value,
                            this.state.difficulty,
                            this.state.category
                          );
                        }}
                      >
                        True
                      </button>
                      <button
                        className="voting-button button-two"
                        type="button"
                        value="False"
                        onClick={event => {
                          this.props.answerClickHandle(
                            event.target.value,
                            this.state.difficulty,
                            this.state.category
                          );
                        }}
                      >
                        False
                      </button>
                    </div>
                  </div>
                );
              } else {
                var shuffle = require("shuffle-array");
                let allAnswers = question.incorrect_answers.concat(
                  question.correct_answer
                );
                shuffle(allAnswers);
                console.log(allAnswers);
                return (
                  <div key={question.question}>
                    <p>{question.category}</p>
                    <p className="score-div--on">
                      {question.difficulty.toUpperCase()}
                    </p>
                    <p>{question.question}</p>

                    <div className="score-div--on">
                      {allAnswers.map(answer => {
                        return (
                          <button
                            className="voting-button"
                            type="button"
                            key={answer}
                            value={answer}
                            onClick={event => {
                              this.props.answerClickHandle(
                                event.target.value,
                                this.state.difficulty,
                                this.state.category
                              );
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
        </div>
      );
    } else {
      return (
        <GameOver
          score={this.props.score}
          potentialScore={this.state.potentialScore}
        />
      );
    }
  }
}

export default QuestionMap;
