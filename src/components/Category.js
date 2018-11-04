import React from "react";

function Category({ handleClick }) {
  return (
    <div>
      <p>Select a category:</p>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value="9"
      >
        General Knowledge
      </button>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value="11"
      >
        Film
      </button>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value="12"
      >
        Music
      </button>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value="14"
      >
        TV
      </button>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value="21"
      >
        Sports
      </button>
      <button
        className="dif-cat-button"
        onClick={event => handleClick(event.target.value)}
        value=""
      >
        I'm Feeling Lucky
      </button>
      <div className="pinkspace">
        <br />
        <br />
      </div>
    </div>
  );
}

export default Category;
