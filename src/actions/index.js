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

export function addToScore(score) {
  return {
    type: 'ADD_TO_SCORE',
    score,
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

export function setTrivia(trivia) {
  let answers = trivia.incorrect_answers
    .map(answer => ({ content: he.decode(answer), correct: false }))
    .concat([{ content: he.decode(trivia.correct_answer), correct: true }]);

  let value = 50;
  if (trivia.type === 'multiple') {
    answers = shuffle(answers);
    value *= 2;
  } else if (trivia.type === 'boolean') {
    answers.sort((a, b) => {
      if (a.content[0] > b.content[0]) {
        return -1;
      }
      return 1;
    });
  }
  if (trivia.difficulty === 'medium') {
    value *= 2;
  } else if (trivia.difficulty === 'hard') {
    value *= 3;
  }

  const newTrivia = {
    category: trivia.category,
    type: trivia.type,
    difficulty: trivia.difficulty,
    question: he.decode(trivia.question),
    answers,
    value,
  };

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

export function setCorrectGif(correctGif) {
  return {
    type: 'SET_CORRECT_GIF',
    correctGif,
  };
}

export function setIncorrectGif(incorrectGif) {
  return {
    type: 'SET_INCORRECT_GIF',
    incorrectGif,
  };
}

export function setSessionId(id) {
  return {
    type: 'SET_SESSION_ID',
    id,
  };
}

export function resetSession() {
  return {
    type: 'RESET_SESSION',
  };
}

export function setHighScores(table) {
  return {
    type: 'SET_HIGH_SCORES',
    table,
  };
}

export function endSession() {
  return (dispatch, getState) => {
    const { session } = getState();
    const { id, score } = session;
    fetch('/api/end-session', {
      method: 'POST',
      body: JSON.stringify({ id, score }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => fetch('/api/high-scores'))
      .then(response => response.json())
      .then(data => dispatch(setHighScores(data)));
  };
}

export function resetGif() {
  return {
    type: 'RESET_GIF',
  };
}

export function fetchGif() {
  return dispatch => {
    const correctTags = ['yes', 'correct', 'great', 'amazing', 'fistbump'];
    const incorrectTags = ['no', 'wrong', 'fail', 'facepalm', 'nope'];
    const correctTag = correctTags[Math.floor(Math.random() * correctTags.length)];
    const incorrectTag = incorrectTags[Math.floor(Math.random() * incorrectTags.length)];

    dispatch(resetGif());
    fetch(`/api/gif/${correctTag}`)
      .then(response => response.json())
      .then(result => {
        dispatch(
          setCorrectGif({
            url: result.results[0].media[0].tinygif.url,
            duration: result.results[0].media[0].nanomp4.duration * 1000,
          }),
        );
      });

    fetch(`/api/gif/${incorrectTag}`)
      .then(response => response.json())
      .then(result => {
        dispatch(
          setIncorrectGif({
            url: result.results[0].media[0].tinygif.url,
            duration: result.results[0].media[0].nanomp4.duration * 1000,
          }),
        );
      });
  };
}

export function fetchTrivia() {
  return (dispatch, getState) => {
    dispatch(setResponse({}));
    const { session, allCategories } = getState();
    const { difficulty, triviaType, category } = session;
    let categoryId = null;

    if (category !== 'any') {
      const idArray = allCategories[category];
      categoryId = idArray[Math.floor(Math.random() * idArray.length)];
    }

    fetch(
      `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}${
        triviaType !== 'any' ? `&type=${triviaType}` : ''
      }${categoryId ? `&category=${categoryId}` : ''}`,
    )
      .then(response => response.json())
      .then(result => {
        dispatch(setTrivia(result.results[0]));
        dispatch(fetchGif());
        dispatch(setStage('trivia'));
      });
  };
}

export function startSession() {
  return (dispatch, getState) => {
    const { session, user } = getState();
    const { difficulty, triviaType, category } = session;
    fetch('/api/new-session', {
      method: 'POST',
      body: JSON.stringify({ userId: user.id, difficulty, triviaType, category }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        dispatch(setSessionId(data.sessionId));
        dispatch(fetchTrivia());
      });
  };
}

export function resetTrivia() {
  return {
    type: 'RESET_TRIVIA',
  };
}

export function chooseGif(correct) {
  if (correct) {
    return {
      type: 'USE_CORRECT_GIF',
    };
  }
  return {
    type: 'USE_INCORRECT_GIF',
  };
}

export function analyzeResponse(response) {
  return (dispatch, getState) => {
    const { session, trivia, gif } = getState();
    const { difficulty, lives, progress } = session;
    const correctGifDuration = gif.correctGif.duration;
    const incorrectGifDuration = gif.incorrectGif.duration;

    dispatch(setResponse(response));
    if (response.correct) {
      setTimeout(() => dispatch(chooseGif(true)), 1000);
      dispatch(addToScore(trivia.value));
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
      setTimeout(() => dispatch(fetchTrivia()), Math.max(correctGifDuration * 1.2, 3000));
    } else {
      setTimeout(() => dispatch(chooseGif(false)), 1000);
      dispatch(decrementLives());
      if (lives > 1) {
        setTimeout(() => dispatch(fetchTrivia()), Math.max(incorrectGifDuration * 1.2, 3000));
      } else {
        dispatch(endSession());
        setTimeout(
          () => dispatch(setStage('gameOver')),
          Math.max(incorrectGifDuration * 1.2, 3000),
        );
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

export function setUsername(username) {
  return {
    type: 'SET_USERNAME',
    username,
  };
}

export function setPassword(password) {
  return {
    type: 'SET_PASSWORD',
    password,
  };
}

export function setLoggedIn() {
  return {
    type: 'SET_LOGGED_IN',
  };
}

export function setUserId(id) {
  return {
    type: 'SET_USER_ID',
    id,
  };
}

export function loginUser() {
  return (dispatch, getState) => {
    const { username, password } = getState().user;
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          dispatch(setUserId(data.id));
          dispatch(setLoggedIn());
          dispatch(setStage('newGame'));
        }
      });
  };
}

export function createUser() {
  return (dispatch, getState) => {
    const { username, password } = getState().user;
    fetch('/api/new-user', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          dispatch(setUserId(data.id));
          dispatch(setLoggedIn());
          dispatch(setStage('newGame'));
        }
      });
  };
}

export function setUserType(userType) {
  return {
    type: 'SET_USER_TYPE',
    userType,
  };
}
