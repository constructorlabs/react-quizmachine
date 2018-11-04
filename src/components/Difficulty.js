import React from "react";

function Difficulty({ handleClick }) {
  return (
    <div>
      <p>Select a difficulty:</p>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value="easy"
      >
        Easy
      </button>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value="medium"
      >
        Medium
      </button>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value="hard"
      >
        Hard
      </button>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value=""
      >
        I'm Feeling Lucky
      </button>
    </div>
  );
}

export default Difficulty;
