function question(state = [], action) {

  // console.log("action payload array", action.payload, "action.type", action.type);

  let currentQuestion,
    rightAnswer,
    incorrectAnswer1,
    incorrectAnswer2,
    incorrectAnswer3,
    quizData

  // Accounting for initialisation when state is not defined, map over questions and extract relevant data
  if (action.payload !== undefined) {
    (action.payload).map(quizItem => {
      currentQuestion = decodeURIComponent(quizItem.question);
      rightAnswer = decodeURIComponent(quizItem.correct_answer);
      incorrectAnswer1 = decodeURIComponent(quizItem.incorrect_answers[0]);
      incorrectAnswer2 = decodeURIComponent(quizItem.incorrect_answers[1]);
      incorrectAnswer3 = decodeURIComponent(quizItem.incorrect_answers[2]);

      quizData = [rightAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3].sort(function () { return 0.5 - Math.random() });

      quizData.unshift(rightAnswer, currentQuestion);

      return quizData;
    })
  }


  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return quizData;
    case 'GAME_OVER':
      return [];
    default:
      return state;
  }

}

export default question;