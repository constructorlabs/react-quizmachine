import React from "react";

function Menu({ difficulty, receiveView, receiveDifficulty }) {
  return (
    <div>
      <h1>It's Quizness Time!</h1>
      <label>Please select difficulty:</label>
      <select
        value={difficulty}
        onChange={event => {
          receiveDifficulty(event.target.value);
        }}
      >
        <option value="&difficulty=easy">Easy</option>
        <option value="&difficulty=medium">Medium</option>
        <option value="&difficulty=hard">Hard</option>
        <option value="">Random</option>
      </select>
      {difficulty === "&difficulty=easy" && (
        <p>Just the basics, easy questions for easy going players.</p>
      )}
      {difficulty === "&difficulty=medium" && (
        <p>Not quite easy, not quite hard.</p>
      )}
      {difficulty === "&difficulty=hard" && (
        <p>Challenging to say the least.</p>
      )}
      {difficulty === "" && (
        <p>
          A mixed bag of question difficulties! Easy questions are worth 1
          point, medium questions are worth 2 points and hard questions are
          worth 3 points.
        </p>
      )}
      <button onClick={() => receiveView("quiz")}>
        Lets get down to Quizness!
      </button>
    </div>
  );
}

export default Menu;
