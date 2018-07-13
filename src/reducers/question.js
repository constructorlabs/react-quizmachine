function question(state = [], action) {

  console.log("Step 5 - setting question in state.");
  console.log("action payload array", action.payload, "action.type", action.type);

  // const questions={};
  //Set up question array 


  // if (action.payload !== undefined) {
  //   console.log("action.payload items", action.payload["0"].question);
  //   console.log("action.payload items", action.payload["0"].correct_answer);
  //   (action.payload["0"].incorrect_answers).map(currentAnswer => {
  //     console.log("Incorrect answer ", currentAnswer)

  //   })
  //   (action.payload).map(arrayItem => {
  //     // console.log("each question ", arrayItem.question);
  //     currentQuestion = [arrayItem.question];
  //     currentQuestion = [...currentQuestion, arrayItem.correct_answer];
  //     console.log(currentQuestion)
  //     // console.log("correct answer ", arrayItem.correct_answer);
  //     // (arrayItem.incorrect_answers).map(currentAnswer => {
  //     // console.log("Incorrect answer ", currentAnswer)

  //     // })
  //   })
  if (action.payload !== undefined) {
    question = action.payload
  }
  switch (action.type) {
    case 'RECEIVE_QUESTION':

      // question = currentQuestion;

      return question
    default:
      return state;
  }
}

export default question;