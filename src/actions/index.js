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

export function incorrectAnswer(pointsAwarded, name){
  return {
    type: 'INCORRECT_ANSWER',
    points: pointsAwarded,
    name
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
  dispatch(fetchQuestion())
    } else {

      const name=window.prompt(`Game Over! Please enter your name to see the ranking table:`)

      dispatch(incorrectAnswer(pointsAwarded, name))
      }

  }
}

// export function displayScores(){
//   return function (dispatch, getState) {
//     const allScores = getState().scores.allScores
//     dispatch({
//       type:"DISPLAY_SCORES",
//       allScores
//     })
//   }
// }
