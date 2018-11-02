import shuffle  from "shuffle-array";

export function fetchQuestion(difficulty){
  return function(dispatch){
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple${difficulty}`)
    .then(response => response.json())
    .then(result => {
      const questionObj = result.results[0]
      dispatch(receiveQuestion(questionObj));
    })
    .catch(error => console.log(error))
  }
}

export function receiveQuestion(question){
  question.answerArr = shuffle(question.incorrect_answers.concat(question.correct_answer));
  return{
    type: 'RECEIVE_QUESTION',
    question,
    correct: ""
  }
}

export function receiveAnswer(answer, question) {
  const correctAnswer = question.correct_answer
  if (answer === correctAnswer) {
    return {
      type: 'CORRECT_ANSWER'
    }
  } else {
    return {
      type: 'INCORRECT_ANSWER'
    }
  }
}

export function receiveView(view){
  return{
    type: 'RECEIVE_VIEW',
    view
  }
}

export function receiveDifficulty(difficulty){
  console.log(difficulty)
  return {
    type: 'RECEIVE_DIFFICULTY',
    difficulty
  }
}
