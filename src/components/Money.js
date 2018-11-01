import React from "react";

function Money({ score, status, friend, audience, fifty, friendLine, audienceLine, fiftyLine, newGame, walkFn }) {

  function useLifeline(event) {
    if (event.target.name === "FRIEND") {
      friendLine(event.target.name);
    } else if (event.target.name === "FIFTY") {
      fiftyLine(event.target.name);
    } else if (event.target.name === "AUDIENCE") {
      audienceLine(event.target.name);
    } else if (event.target.name === "RESTART") {

      newGame(event.target.name);
    } else {
      walkFn('WALK')
    }
  }

  function displayScore() {
    let scoreString;
    if (status === "lose" && score > 0) {
      scoreString = `You leave with £ ${score.toLocaleString()}
                      - Thanks for playing!`

    } else if (status === "walk" && score > 0) {
      scoreString = `You leave with £ ${score.toLocaleString()}
      - Chicken! `
    } else if ((status === "lose" || status === "walk") && score === 0) {
      scoreString = `You lose(r)! -  Better luck next time!`

    } else {
      scoreString = `You currently have £ ${score.toLocaleString()}`
    }
    return scoreString;
  }

  return (
    <div className="score__money">

      <div className="score__logo">
        <img src="minionaire.png" name="RESTART" onClick={event => useLifeline(event)} />
      </div>

      <div className="score__money--wrapper">
        <div className="score__money--buttons">

          {(fifty !== "FIFTY") && (fifty !== "USEDFIFTY") ? <img
            className="score__money--lifeline"
            src="5050.png"
            name="FIFTY"
            onClick={event => useLifeline(event)} /> :
            <img
              className="score__money--lifeline"
              src="5050Used.png" />
          }

          {friend !== "FRIEND" ? <img
            className="score__money--lifeline"
            src="friend.png"
            name="FRIEND"
            onClick={event => useLifeline(event)} /> :
            <img
              className="score__money--lifeline"
              src="friendUsed.png" />
          }

          {audience !== "AUDIENCE" ? <img
            className="score__money--lifeline"
            src="audience.png"
            name="AUDIENCE"
            onClick={event => useLifeline(event)} /> :
            <img
              className="score__money--lifeline"
              src="audienceUsed.png" />
          }

          <img
            className="score__money--lifeline"
            src="leave.png"
            name="walk"
            onClick={event => useLifeline(event)} />

        </div>
        <div className="score__money--money">
          {displayScore()}
        </div>
      </div>

    </div>
  );
}

export default Money;

