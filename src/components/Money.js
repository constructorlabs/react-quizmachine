import React from "react";

function Money({ score, status, lifeLine, lifelineFn }) {

  let askAFriend = true;
  let fiftyfifty = true;
  let asktheClass = true;

  // function friendButton() {
  //   let friendString;
  //   console.log("You used your friend lifeline", lifeLine);
  //   if (lifeLine === "FRIEND") {
  //     friendString = <img
  //       className="score__money--lifeline"
  //       src="friendUsed.png" />
  //   } else {
  //     friendString = <img
  //       className="score__money--lifeline"
  //       src="friend.png"
  //       name="friend"
  //       onClick={friendLifeline()} />
  //   }
  //   return friendString;
  // }
  function friendLifeline(event) {
    console.log("You used your friend lifeline", lifeLine);
    lifelineFn("FRIEND");
    console.log("After used your friend lifeline", lifeLine);
  }

  //   }
  //   else if (event.target.name === "fifty") {
  //     console.log("You used your 50:50 lifeline")
  //   }
  //   else {
  //     console.log("You used your class lifeline")
  //   }
  // }

  function displayScore() {
    let scoreString;
    if (status === "lose" && score > 0) {
      scoreString = `You leave with £ ${score.toLocaleString()}
                      Thanks for playing!`
    } else if (status === "lose") {
      scoreString = `You leave with Nothing! Better luck next time!`
    } else {
      scoreString = `You currently have £ ${score.toLocaleString()}`
    }
    return scoreString;
  }

  return (
    <div className="score__money">
      <div className="score__logo">
        <img src="minionaire.png" />
      </div>
      <div className="score__money--wrapper">
        <div className="score__money--buttons">

          <img
            className="score__money--lifeline"
            src="5050.png"
            name="fifty"
            onClick={event => lifeline(event)} />

          {lifeLine !== "FRIEND" ? <img
            className="score__money--lifeline"
            src="friend.png"
            name="friend"
            onClick={event => friendLifeline(event)} /> :
            <img
              className="score__money--lifeline"
              src="friendUsed.png"
              name="friend"
              onClick={event => friendLifeline(event)} />
          }

          <img
            className="score__money--lifeline"
            src="audience.png"
            name="class"
            onClick={event => { lifeline(event) }} />

          <img
            className="score__money--lifeline"
            src="leave.png"
            name="walk"
            onClick={event => { lifeline(event) }} />

        </div>
        <div className="score__money--money">
          {displayScore()}
        </div>
      </div>

    </div>
  );
}

export default Money;


{/* <button
            className="score__money--lifeline"
            name="walk"
            onClick={event => { lifeline(event) }}>

            walk</button> */}

            // {askAFriend ?
            //   <img
            //     className="score__money--lifeline"
            //     src="friend.png"
            //     name="friend"
            //     onClick={event => FriendLifeline(event)} /> :
            //   <img
            //     className="score__money--lifeline"
            //     src="friendUsed.png"
            //   />
            // }