
export function receiveQuestion(result) {
  return {
    type: 'RECEIVE_QUESTION',
    quizQuestion: result
  }
}

export function isRightAnswer(questionAnswer) {
  return {
    type: 'RECEIVE_ANSWER',
    questionAnswer
  }
}

export function scoreUpdate(score) {
  return {
    type: 'RECEIVE_SCORE',
    score
  }
}

export function optionsCategory(optionsCategory) {
  return {
    type: 'RECEIVE_OPTIONS_CATEGORY',
    optionsCategory
  }
}

export function optionsCategoryName(optionsCategoryName) {
  return {
    type: 'RECEIVE_OPTIONS_CATEGORY_NAME',
    optionsCategoryName
  }
}

export function optionsDifficulty(optionsDifficulty) {
  return {
    type: 'RECEIVE_OPTIONS_DIFFICULTY',
    optionsDifficulty
  }
}

export function currentQuestion(currentQuestion) {
  return {
    type: 'RECEIVE_CURRENT_QUESTION',
    currentQuestion
  }
}

export function updateReduxQuestionsAmount(questionsAmount) {
  return {
    type: 'RECEIVE_QUESTION_AMOUNT',
    updateReduxQuestionsAmount: questionsAmount
  }
}

export function viewMessage(viewMessage) {
  return {
    type: 'RECEIVE_VIEW_MESSAGE',
    viewMessage
  }
}

export function fetchQuestion(category = '', difficulty = '', amount = 1) {
  return function (dispatch) {
    fetch(`https://opentdb.com/api.php?amount=${amount}&type=multiple&category=${category}&difficulty=${difficulty}&encode=url3986`)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestion(result));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // dispatch(receiveQuestion({
  //   "response_code": 0,
  //   "results": [
  //     {
  //       "category": "Entertainment: Television",
  //       "type": "multiple",
  //       "difficulty": "medium",
  //       "question": "In Star Trek, what is the Ferengi's First Rule of Acquisition?",
  //       "correct_answer": "Once you have their money, you never give it back. ",
  //       "incorrect_answers": [
  //         "Never place friendship above profit",
  //         "Greed is Eternal",
  //         "Never allow family to stand in the way of opportunity"
  //       ]
  //     }
  //   ]

  // }));
}