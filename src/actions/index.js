
export function fetchQuestionAPI(){
  // console.log()
  return function(dispatch, getState){
      // const {reduxState} = getState();
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestions(result))
        dispatch(correct_answer(result))
        dispatch(fetchPhoto(result.results[0].category))
        // dispatch(receiveSearch(result.results[0].category))
        // console.log('hi')
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

function fetchPhoto(category){
  console.log('hi')
  return function(dispatch, getState){
      // const {reduxState} = getState();
      fetch(`https://api.unsplash.com/search/photos?page=1&query=${category}&client_id=d1463f432cce4150640ff56ee13c1f94ec0b2993db4395bcb8913f34daeb0d48`)
      .then(response => response.json())
      .then(result => {
        dispatch(savePhoto(result))
      })
      .catch(function(error) {
        // something went wrong. let's sort it out
      });
  }
};


export function savePhoto(result){
  // console.log(result.results[0].urls.regular)
  return {
    type: 'SAVE_PHOTO_URL',
    image: result.results[0].urls.regular

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