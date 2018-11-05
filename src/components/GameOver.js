import React from "react";

function GameOver({ score, potentialScore }) {
  function refreshPage() {
    window.location.reload();
  }
  if (score < potentialScore / 2) {
    return (
      <div className="grid">
        <div className="center">
          <h1>Game Over</h1>
          <p>
            You scored: {score}/{potentialScore}
          </p>
          <div className="gif-background">
            <iframe
              src="https://giphy.com/embed/NViYskan7DUSQ"
              width="480"
              height="319"
              frameBorder="0"
              allowFullScreen
              className="gif"
            />
          </div>
          <br />
          <button
            className="dif-cat-button"
            type="button"
            onClick={() => refreshPage()}
          >
            Play Again
          </button>
        </div>
      </div>
    );
  } else if (score < (potentialScore / 4) * 3 && score > potentialScore / 2) {
    return (
      <div className="grid">
        <div className="center">
          <h1>Game Over</h1>
          <p>
            You scored: {score}/{potentialScore}
          </p>
          <div className="gif-background">
            <iframe
              src="https://giphy.com/embed/2fC4V2UeJveb6"
              width="480"
              height="270"
              frameBorder="0"
              className="gif"
              allowFullScreen
            />
          </div>
          <br />
          <button
            className="dif-cat-button"
            type="button"
            onClick={() => refreshPage()}
          >
            Play Again
          </button>
        </div>
      </div>
    );
  } else if (score > (potentialScore / 100) * 75) {
    return (
      <div className="grid">
        <div className="center">
          <h1>Game Over</h1>
          <p>
            You scored: {score}/{potentialScore}
          </p>
          <div className="gif-background">
            <iframe
              src="https://giphy.com/embed/f2fX7GtXh1nbi"
              width="480"
              height="312"
              frameBorder="0"
              className="gif"
              allowFullScreen
            />
          </div>

          <button
            className="dif-cat-button"
            type="button"
            onClick={() => refreshPage()}
          >
            Play Again
          </button>
        </div>
      </div>
    );
  } else if (score == potentialScore) {
    <div className="grid">
      <div className="center">
        <h1>Game Over</h1>
        <p>
          You scored: {score}/{potentialScore}
        </p>
        <div className="gif-background">
          <iframe
            src="https://giphy.com/embed/fKW11LAa5UE6s"
            width="480"
            height="313"
            frameBorder="0"
            class="gif"
            allowFullScreen
          />
        </div>

        <button
          className="dif-cat-button"
          type="button"
          onClick={() => refreshPage()}
        >
          Play Again
        </button>
      </div>
    </div>;
  }
}

export default GameOver;
