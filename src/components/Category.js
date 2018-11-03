import React from "react";

function Category({ handleClick }) {
  return (
    <div>
      <p>select a category:</p>
      <button onClick={event => handleClick(event.target.value)} value="9">
        General Knowledge
      </button>
      <button onClick={event => handleClick(event.target.value)} value="11">
        Film
      </button>
      <button onClick={event => handleClick(event.target.value)} value="12">
        Music
      </button>
      <button onClick={event => handleClick(event.target.value)} value="14">
        TV
      </button>
      <button onClick={event => handleClick(event.target.value)} value="21">
        Sports
      </button>
      <button onClick={event => handleClick(event.target.value)} value="">
        I'm Feeling Lucky
      </button>
    </div>
  );
}

export default Category;
