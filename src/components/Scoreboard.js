import React from "react";

class Scoreboard extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="scoreboard__container">
        <h2 className="scoreboard__title">
          Well done, you scored {this.props.points} points!
        </h2>
        <ol className="scoreboard__list">
          {this.props.scoreboard.map(score => (
            <li
              className="scoreboard__list__item"
              key={score.name + score.points + Math.random()}
            >
              {" "}
              {score.name}: {score.points}{" "}
            </li>
          ))}
        </ol>
        <p className="scoreboard__form__label">
          Enter your name below to add your score to the scoreboard
        </p>
        {this.props.formVisible == "yes" && (
          <form
            className="scoreboard__form"
            onSubmit={event => {
              event.preventDefault();
              this.props.submitScore(
                this.props.name,
                this.props.points,
                this.props.difficulty
              );
            }}
          >
            <input
              className="scoreboard__form__input"
              onChange={event =>
                this.props.receivePlayerName(event.target.value)
              }
              placeholder="Please enter your name here"
            />
            <button className="scoreboard__form__button" type="submit">
              Add score
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Scoreboard;
