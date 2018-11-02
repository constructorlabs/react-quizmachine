export function fetchQuestion(){
  return function(dispatch){
    fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(response => response.json())
    .then(result => {
      const questionObj = result.results[0]
      console.log(questionObj)
      dispatch(receiveQuestion(questionObj));
    })
    .catch(error => console.log(error))
  }
}

export function receiveQuestion(question){
  return{
    type: 'RECEIVE_QUESTION',
    question,
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
