const he = require('he');
const shuffle = require('shuffle-array');

export function setDifficulty(difficulty) {
  return {
    type: 'SET_DIFFICULTY',
    difficulty,
  };
}

export function setStage(stage) {
  return {
    type: 'SET_STAGE',
    stage,
  };
}

export function setScore(score) {
  return {
    type: 'SET_SCORE',
    score,
  };
}

export function addToScore(score) {
  return {
    type: 'ADD_TO_SCORE',
    score,
  };
}

export function setLives(lives) {
  return {
    type: 'SET_LIVES',
    lives,
  };
}

export function incrementLives() {
  return {
    type: 'INCREMENT_LIVES',
  };
}

export function decrementLives() {
  return {
    type: 'DECREMENT_LIVES',
  };
}

export function incrementProgress() {
  return {
    type: 'INCREMENT_PROGRESS',
  };
}

export function resetProgress() {
  return {
    type: 'RESET_PROGRESS',
  };
}

export function setTrivia(trivia, value) {
  const answers = shuffle(
    trivia.incorrect_answers
      .map(answer => ({ content: he.decode(answer), correct: false, value: 0 }))
      .concat([{ content: he.decode(trivia.correct_answer), correct: true, value }]),
  );

  const newTrivia = {
    category: trivia.category,
    type: trivia.type,
    difficulty: trivia.difficulty,
    question: he.decode(trivia.question),
    answers,
    value,
  };

  console.log(newTrivia.answers);

  return {
    type: 'SET_TRIVIA',
    trivia: newTrivia,
  };
}

export function fetchTrivia() {
  return (dispatch, getState) => {
    const { difficulty } = getState();
    const value = difficulty === 'easy' ? 100 : difficulty === 'medium' ? 200 : 300;
    fetch(`https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=multiple`)
      .then(response => response.json())
      .then(result => {
        dispatch(setTrivia(result.results[0], value));
        dispatch(setStage('trivia'));
      });
  };
}

export function setResponse(response) {
  return {
    type: 'SET_RESPONSE',
    response,
  };
}

export function analyzeResponse(response) {
  return (dispatch, getState) => {
    const { progress, difficulty, lives } = getState();
    dispatch(setResponse(response));
    dispatch(addToScore(response.value));
    if (response.correct) {
      if (progress < 9) {
        dispatch(incrementProgress());
      } else {
        let newDifficulty;
        if (difficulty === 'easy') {
          newDifficulty = 'medium';
        } else if (difficulty === 'medium' || difficulty === 'hard') {
          newDifficulty = 'hard';
        }
        dispatch(setDifficulty(newDifficulty));
        dispatch(incrementLives());
        dispatch(resetProgress());
      }
      setTimeout(() => dispatch(fetchTrivia()), 500);
    } else if (lives > 1) {
      dispatch(decrementLives());
      setTimeout(() => dispatch(fetchTrivia()), 500);
    } else {
      dispatch(setStage('gameOver'));
    }
  };
}
