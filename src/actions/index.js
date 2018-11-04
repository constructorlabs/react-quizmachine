
export function fetchQuestionAPI(){
  // console.log()
  return function(dispatch, getState){
      // const {reduxState} = getState();
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestions(result))
        dispatch(correct_answer(result))
        // console.log(result.results[0])
      })
      .catch(function(error) {
        // something went wrong. let's sort it out
      });
  }
};

export function correct_answer(result){
  return {
    type: 'CORRECT_ANSWER',
    correct_answer: result.results[0].correct_answer
  }
}

export function score(isCorrect){
  console.log(isCorrect)
  return {
    
    type: 'SCORE_ADD',
    answerIsCorrect: isCorrect
  }
 
}




export function receiveQuestions(result){
  return {
    type: 'RECEIVE_QUESTIONS',
    questions: result.results[0]
    
    //questions refers to a variable
    //result = result of fetch
  }
}

// export function score(currentScore){
//   return {
//     type: 'SCORE_FETCH',
//     score: currentScore //to complete

//     //questions refers to a variable
//     //result = result of fetch
//   }
// }

export function countDown()
{
    counter = counter - 1;
    window.status = counter;
    if (counter == 0)
    {
         window.clearTimeout( timer );
         timer = null;
    }
    else
    {
        timer = window.setTimeout( "countDown()", 1000);
    }
}


var timer;
var counter = 10;

export function startCounting()
{
    timer = window.setTimeout( "countDown()", 1000 );
    window.status = counter;    // show the initial value
}