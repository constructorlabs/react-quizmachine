
export function fetchQuestionAPI(){
  // console.log()
  return function(dispatch, getState){
      // const {reduxState} = getState();
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then(response => response.json())
      .then(result => {
          console.log(result)
        dispatch(receiveQuestions(result))
        dispatch()
      })
      .catch(function(error) {
        // something went wrong. let's sort it out
      });
  }
};


export function receiveQuestions(result){
  return {
    type: 'RECEIVE_QUESTIONS',
    questions: result
  }
}