import React from "react";

function Money({ score, result }) {

  let AskAFriend = true;
  let fiftyfifty = true;
  let AsktheClass = true;

  function lifeline(event) {
    if (event.target.name === "friend") {
      console.log("You used your friend lifeline")
    }
    else if (event.target.name === "fifty") {
      console.log("You used your 50:50 lifeline")
    }
    else {
      console.log("You used your class lifeline")
    }
  }

  return (
    <div className="score__money">
      <div className="score__logo">
        <img src="minionaire.png" />
      </div>
      <div className="score__money--wrapper">
        <div className="score__money--buttons">
          <button
            className="score__money--lifeline"
            name="walk"
            onClick={event => { lifeline(event) }}>

            walk</button>

          <button
            className="score__money--lifeline"
            name="fifty"
            onClick={event => { lifeline(event) }}>

            50 : 50</button>

          <button
            className="score__money--lifeline"
            name="class"
            onClick={event => { lifeline(event) }}>

            Ask the Class</button>

          <button
            className="score__money--lifeline"
            name="friend"
            onClick={event => { lifeline(event) }}>

            Ask a Friend</button>
        </div>
        <div className="score__money--money">
          You currently have £{score.toLocaleString()}
        </div>
      </div>

    </div>
  );
}

export default Money;