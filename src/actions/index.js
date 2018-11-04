export function receiveQuestion(question) {
  console.log("Step 5. creating RECEIVE_QUESTION obj");
  return {
    type: "RECEIVE_QUESTION",
    currentQuestion: question
  };
}

export function fetchQuestion(key) {
  console.log("Step 4. calling fetch");

  return function(dispatch) {
    fetch(`https://opentdb.com/api.php?amount=1&category=${key}&type=multiple`)
      .then(response => response.json())
      .then(body => {
        const question = body.results[0];
        const currentQuestion = Object.assign({}, question, {
          options: question.incorrect_answers
            .concat(question.correct_answer)
            .sort()
        });
        console.log(question.correct_answer);
        dispatch(receiveQuestion(currentQuestion));
      })
      .catch(error => error.message);
  };
}

export function correctAnswer(pointsAwarded) {
  return {
    type: "CORRECT_ANSWER",
    points: pointsAwarded
  };
}

export function incorrectAnswer(pointsAwarded, name) {
  return {
    type: "INCORRECT_ANSWER",
    points: pointsAwarded,
    name
  };
}

export function selectOption(selected) {
  return function(dispatch, getState) {
    const currentQuestion = getState().question;
    const categoryKey = Object.keys(getState().category.category)[0];

    const pointsSchedule = {
      easy: 1,
      medium: 2,
      hard: 3
    };
    const currentDifficulty = currentQuestion.difficulty;
    const pointsAwarded = pointsSchedule[currentDifficulty];

    if (selected === currentQuestion.correct_answer) {
      dispatch(correctAnswer(pointsAwarded));
      dispatch(fetchQuestion(categoryKey));
      dispatch(loadImage())
    } else {
      let name = window.prompt(
        `Sorry! The correct answer is: ${currentQuestion.correct_answer}.
Please enter your name to see your ranking:`
      );
      name==''? name='Superhero': name
      dispatch(loadSorryImage())
      dispatch(incorrectAnswer(pointsAwarded, name));
    }
  };
}

export function restart() {
  return function(dispatch) {
    dispatch(receiveQuestion({}));
    dispatch({
      type: "RESTART"
    })
    dispatch(loadImage())
  };
}

export function selectCategory(category) {
  return function(dispatch, getState) {
    const options = getState().category.options;
    const selectedKey = Object.keys(options).find(
      key => options[key] === category
    );

    dispatch({
      type: "SELECT_CATEGORY",
      category: { [selectedKey]: category }
    });
    dispatch(fetchQuestion(selectedKey));
  };
}

export function loadImage() {
  return {
    type:'LOAD_IMAGE'
  }
}

export function loadSorryImage() {
  return {
    type:'LOAD_SORRY_IMAGE'
  }
}
