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
  let answers = trivia.incorrect_answers
    .map(answer => ({ content: he.decode(answer), correct: false, value: 0 }))
    .concat([{ content: he.decode(trivia.correct_answer), correct: true, value }]);

  if (trivia.type === 'multiple') {
    answers = shuffle(answers);
  } else if (trivia.type === 'boolean') {
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

export function setGif(gifUrl) {
  return {
    type: 'SET_GIF_URL',
    gifUrl,
  };
}

export function fetchTrivia() {
  return (dispatch, getState) => {
    dispatch(setResponse({}));
    const { difficulty, triviaType, category, allCategories } = getState();
    let type = null;
    let value = 50;
    let categoryId = null;

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

    if (category !== 'any') {
      const idArray = allCategories[category];
      categoryId = idArray[Math.floor(Math.random() * idArray.length)];
    }

    fetch(
      `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}${type ? `&type=${type}` : ''}${
        categoryId ? `&category=${categoryId}` : ''
      }`,
    )
      .then(response => response.json())
      .then(result => {
        dispatch(setTrivia(result.results[0], value));
        dispatch(setGif(''));
        dispatch(setStage('trivia'));
      });
  };
}

export function resetTrivia() {
  return {
    type: 'RESET_TRIVIA',
  };
}

export function fetchGif(correct) {
  return dispatch => {
    let tag;
    const correctTags = ['yes', 'correct', 'great', 'amazing', 'fistbump'];
    const incorrectTags = ['no', 'wrong', 'fail', 'facepalm', 'nope'];
    if (correct) {
      tag = correctTags[Math.floor(Math.random() * correctTags.length)];
    } else {
      tag = incorrectTags[Math.floor(Math.random() * incorrectTags.length)];
    }
    fetch(`/api/gif/${tag}`)
      .then(response => response.json())
      .then(result => {
        dispatch(setGif(result.results[0].media[0].tinygif.url));
      });
  };
}

export function analyzeResponse(response) {
  return (dispatch, getState) => {
    const { progress, difficulty, lives } = getState();
    dispatch(setResponse(response));
    dispatch(addToScore(response.value));
    dispatch(fetchGif(response.correct));
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
      setTimeout(() => dispatch(fetchTrivia()), 4000);
    } else {
      dispatch(decrementLives());
      if (lives > 1) {
        setTimeout(() => dispatch(fetchTrivia()), 4000);
      } else {
        setTimeout(() => dispatch(setStage('gameOver')), 4000);
      }
    }
  };
}

export function setTriviaType(triviaType) {
  return {
    type: 'SET_TRIVIA_TYPE',
    triviaType,
  };
}

export function setCategory(category) {
  return {
    type: 'SET_CATEGORY',
    category,
  };
}

export function setAllCategories(categories) {
  const entertainment = categories
    .filter(item => item.name.includes('Entertainment'))
    .map(item => item.id);
  const history = categories.filter(item => item.name.includes('History')).map(item => item.id);
  const science = categories.filter(item => item.name.includes('Science')).map(item => item.id);
  const sports = categories.filter(item => item.name.includes('Sports')).map(item => item.id);
  const combinedCategories = [...entertainment, ...history, ...science, ...sports];
  const others = categories
    .filter(item => !combinedCategories.includes(item.id))
    .map(item => item.id);
  const groupedCategories = {
    entertainment,
    history,
    science,
    sports,
    others,
  };
  return {
    type: 'SET_ALL_CATEGORIES',
    allCategories: groupedCategories,
  };
}

export function fetchCategories() {
  return dispatch => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(result => {
        dispatch(setAllCategories(result.trivia_categories));
      });
  };
}
