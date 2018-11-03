import React from "react";

function Difficulty({ handleClick }) {
  return (
    <div>
      <p>select a difficulty:</p>
      <button onClick={event => handleClick(event.target.value)} value="easy">
        Easy
      </button>
      <button onClick={event => handleClick(event.target.value)} value="medium">
        Medium
      </button>
      <button onClick={event => handleClick(event.target.value)} value="hard">
        Hard
      </button>
      <button onClick={event => handleClick(event.target.value)} value="">
        I'm Feeling Lucky
      </button>
    </div>
  );
}

export default Difficulty;
