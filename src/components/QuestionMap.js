import React from "react";
import Difficulty from "./Difficulty";
import Category from "./Category";
import cx from "classnames";
class QuestionMap extends React.Component {
  constructor() {
    super();

    this.state = {
      difficulty: "",
      category: "",
      displayDiff: true,
      displayCat: false,
      displayQuestion: false,
    };

    this.difficultyHandleClick = this.difficultyHandleClick.bind(this);
  }

  componentDidMount() {
    this.props.questionFetch(this.state.difficulty, this.state.category);
  }

  difficultyHandleClick(value) {
    console.log(value);
    this.setState({
      difficulty: value,
      displayDiff: !this.state.displayDiff,
      displayCat: !this.state.displayCat,
    });
  }

  categoryHandleClick(value) {
    this.setState({
      category: value,
      displayCat: !this.state.displayCat,
      displayQuestion: !this.state.displayQuestion,
    });
  }

  render() {
    const difficultyClassSwitch = cx("difficulty-div", {
      "difficulty-div--on": this.state.showNutrition == true,
    });
    const categoryClassSwitch = cx("category-div", {
      "category-div--on": this.state.displayCat == true,
    });
    console.log("props", this.props);
    return (
      <div className="grid">
        <div className="center">
          <Difficulty
            className={difficultyClassSwitch}
            handleClick={this.difficultyHandleClick}
          />
          <Category
            className={categoryClassSwitch}
            handleClick={this.categoryHandleClick}
          />
          <div className="question-div">
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
                          this.props.answerClickHandle(
                            event.target.value,
                            this.state.difficulty,
                            this.state.category
                          );
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
      </div>
    );
  }
}

export default QuestionMap;
