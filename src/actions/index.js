
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

export function fetchQuestion() {
  return function (dispatch) {
    dispatch(receiveQuestion({

      "response_code": 0,
      "results": [
        {
          "category": "Entertainment: Television",
          "type": "multiple",
          "difficulty": "medium",
          "question": "In Star Trek, what is the Ferengi's First Rule of Acquisition?",
          "correct_answer": "Once you have their money, you never give it back. ",
          "incorrect_answers": [
            "Never place friendship above profit",
            "Greed is Eternal",
            "Never allow family to stand in the way of opportunity"
          ]
        }
      ]

    }));
    // fetch(`https://opentdb.com/api.php?amount=1&type=multiple&encode=url3986`)
    //   .then(response => response.json())
    //   .then(result => {
    //     dispatch(receiveQuestion(result));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
}