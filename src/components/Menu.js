import React from "react";

function Menu({ difficulty, receiveView, receiveDifficulty }) {
  return (
    <div>
      <h1>It's Quizness Time!</h1>
      <label>Please select difficulty:</label>
      <select
        value={difficulty}
        onChange={event => receiveDifficulty(event.target.value)}
      >
        <option value="&difficulty=easy">Easy</option>
        <option value="&difficulty=medium">Medium</option>
        <option value="&difficulty=hard">Hard</option>
        <option value="">Random</option>
      </select>
      <button onClick={() => receiveView("quiz")}>
        Lets get down to Quizness!
      </button>
    </div>
  );
}

export default Menu;
