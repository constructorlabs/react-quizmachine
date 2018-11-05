import shuffle from "shuffle-array";

export function fetchQuestion(difficulty) {
  return function(dispatch) {
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple${difficulty}`)
      .then(response => response.json())
      .then(result => {
        const questionObj = result.results[0];
        dispatch(receiveQuestion(questionObj));
      })
      .catch(error => console.log(error));
  };
}

export function receiveQuestion(question) {
  question.answerArr = shuffle(
    question.incorrect_answers.concat(question.correct_answer)
  );
  return {
    type: "RECEIVE_QUESTION",
    question,
    correct: ""
  };
}

export function receiveAnswer(answer, question, quizDifficulty) {
  const correctAnswer = question.correct_answer;
  if (answer === correctAnswer) {
    return {
      type: "CORRECT_ANSWER",
      quizDifficulty,
      questionDifficulty: question.difficulty
    };
  } else {
    return {
      type: "INCORRECT_ANSWER"
    };
  }
}

export function receiveView(view) {
  return {
    type: "RECEIVE_VIEW",
    view
  };
}

export function receiveDifficulty(difficulty) {
  return {
    type: "RECEIVE_DIFFICULTY",
    difficulty
  };
}

export function receivePlayerName(name) {
  return {
    type: "RECEIVE_PLAYER_NAME",
    name
  };
}


export function fetchScoreboard(difficulty) {
  const scoreboard = JSON.parse(localStorage.getItem(difficulty))
  return {
    scoreboard
  }
}

export function initializeStateScoreboard(difficulty){
  const scoreboard = JSON.parse(localStorage.getItem(difficulty))
  return {
    type: "RECEIVE_SCOREBOARD",
    scoreboard: scoreboard,
    formVisible: "yes"
  }
}

export function submitScore(name, points, difficulty) {
    const quizDifficulty = !difficulty ? "random" : difficulty;
    const scoreboardArray = fetchScoreboard(quizDifficulty);
    const playerScoreObject = { name: name, points: points };
    if (scoreboardArray.scoreboard === null) {
      localStorage.setItem(quizDifficulty, JSON.stringify([playerScoreObject]));
    } else if (scoreboardArray) {
      const newScoreboard = scoreboardArray.scoreboard.concat(playerScoreObject)
      newScoreboard.sort((a, b) => b.points - a.points);
      localStorage.setItem(difficulty, JSON.stringify(newScoreboard))
    }
    const updatedScoreboard = fetchScoreboard(quizDifficulty);
    return {
      type: "RECEIVE_SCOREBOARD",
      scoreboard: updatedScoreboard.scoreboard,
      formVisible: "no"
    }
}

