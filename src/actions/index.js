
export function fetchQuestionAPI(){
  // console.log()
  return function(dispatch, getState){
      // const {reduxState} = getState();
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestions(result))
      })
      .catch(function(error) {
        // something went wrong. let's sort it out
      });
  }
};


export function receiveQuestions(result){
  return {
    type: 'RECEIVE_QUESTIONS',
    questions: result.results[0]

    //questions refers to a variable
    //result = result of fetch
  }
}

export function scoreFetch(currentScore){
  return {
    type: 'SCORE_FETCH',
    score: currentScore //to complete

    //questions refers to a variable
    //result = result of fetch
  }
}