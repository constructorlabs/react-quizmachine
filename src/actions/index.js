export function fetchQuestion(){
  return function(dispatch){
    fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(response => response.json())
    .then(result => {
      const questionObj = result.results[0]
      console.log('Step 3: calling fetch', questionObj)
      dispatch(receiveQuestion(questionObj));
    })
    .catch(error => console.log(error))
  }
}

export function receiveQuestion(question){
  console.log('Step 4 - creating RECEIVE_QUESTION question object')
  return{
    type: 'RECEIVE_QUESTION',
    question,
  }
}

export function receiveAnswer(answer, getState) {
  const reduxState = getState();
  const correctAnswer = reduxState.question.correct_answer
  const difficulty = reduxState.question.difficulty
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
