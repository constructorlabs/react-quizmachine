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

export function setTrivia(trivia, value, type) {
  let answers = trivia.incorrect_answers
    .map(answer => ({ content: he.decode(answer), correct: false, value: 0 }))
    .concat([{ content: he.decode(trivia.correct_answer), correct: true, value }]);

  if (type === 'multiple') {
    answers = shuffle(answers);
  } else if (type === 'boolean') {
    answers.sort((a, b) => {
      if (a.content[0] > b.content[0]) {
        return -1;
      }
      return 1;
    });
  }

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

export function setResponse(response) {
  return {
    type: 'SET_RESPONSE',
    response,
  };
}

export function fetchTrivia() {
  return (dispatch, getState) => {
    dispatch(setResponse({}));
    const { difficulty, triviaType } = getState();
    let type = null;
    let value = 50;

    if (triviaType === 'multiple') {
      type = 'multiple';
      value *= 2;
    } else if (triviaType === 'true/false') {
      type = 'boolean';
    }

    if (difficulty === 'medium') {
      value *= 2;
    } else if (difficulty === 'hard') {
      value *= 3;
    }

    fetch(`https://opentdb.com/api.php?amount=1&difficulty=${difficulty}${type && `&type=${type}`}`)
      .then(response => response.json())
      .then(result => {
        dispatch(setTrivia(result.results[0], value, type));
        dispatch(setStage('trivia'));
      });
  };
}

export function resetTrivia() {
  return {
    type: 'RESET_TRIVIA',
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

export function setTriviaType(triviaType) {
  return {
    type: 'SET_TRIVIA_TYPE',
    triviaType,
  };
}
