export function receiveQuestion(currentQuestion){
  console.log('Step 5. creating RECEIVE_QUESTION obj')
  return{
    type:'RECEIVE_QUESTION',
    currentQuestion
  }
};



export function fetchQuestion(){
  console.log('Step 4. calling fetch')
  return function(dispatch){
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
    .then(response => response.json())
    .then(body => {
      const question=body.results[0];
      const currentQuestion=Object.assign({},question, {options:question.incorrect_answers.concat(question.correct_answer).sort()})
      dispatch(receiveQuestion(currentQuestion))
    })
  }
};

export function correctAnswer(pointsAwarded){
  return {
    type: 'CORRECT_ANSWER',
    points: pointsAwarded
    }

};

export function incorrectAnswer(pointsAwarded){
  return {
    type: 'INCORRECT_ANSWER',
    points: pointsAwarded
    }


}

export function selectOption(selected){
  return function( dispatch, getState){
    const currentQuestion=getState().question;
    console.log(currentQuestion)
    const pointsSchedule = {
      easy: 1,
      medium:2,
      hard:3
    }
    const currentDifficulty = currentQuestion.difficulty;
    const pointsAwarded = pointsSchedule[currentDifficulty];
    if(selected === currentQuestion.correct_answer){
      dispatch(correctAnswer(pointsAwarded))

    } else {
      dispatch(incorrectAnswer(pointsAwarded))
      alert(`Sorry! Try again next time. You scored ${getState().score}.`)
      }
  }
}
