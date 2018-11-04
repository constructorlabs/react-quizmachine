import React from "react";

function Menu({ difficulty, receiveView, receiveDifficulty }) {
  return (
    <div className="menu__container">
      <h1 className="menu__title">It's Quizness Time!</h1>
      <label className="menu__select__label">Please select difficulty:</label>
      <select
        value={difficulty}
        onChange={event => {
          receiveDifficulty(event.target.value);
        }}
        className="menu__select__dropdown"
      >
        <option value="&difficulty=easy">Easy</option>
        <option value="&difficulty=medium">Medium</option>
        <option value="&difficulty=hard">Hard</option>
        <option value="">Random</option>
      </select>
      {difficulty === "&difficulty=easy" && (
        <p className="menu__select__description">Just the basics, easy questions for easy going players.</p>
      )}
      {difficulty === "&difficulty=medium" && (
        <p className="menu__select__description">Not quite easy, not quite hard.</p>
      )}
      {difficulty === "&difficulty=hard" && (
        <p className="menu__select__description">Challenging to say the least.</p>
      )}
      {difficulty === "" && (
        <p className="menu__select__description">
          A mixed bag of question difficulties! Easy questions are worth 1
          point, medium questions are worth 2 points and hard questions are
          worth 3 points.
        </p>
      )}
      <button className="menu__select__button" onClick={() => receiveView("quiz")}>
        Lets get down to Quizness!
      </button>
    </div>
  );
}

export default Menu;
