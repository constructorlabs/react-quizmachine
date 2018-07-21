import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestionFromAPI, correctAnswer, incorrectAnswer, endQuestions, endGame, friendline, audienceline, fiftyline, walk } from "../actions";

const mapStateToProps = (reduxState) => {

  console.log("Step 6 - calling mapStateToProps in QuestionContainer", reduxState["question"])

  return {
    quizData: reduxState.question,
    money: reduxState.money,
    status: reduxState.endGame,
    friend: reduxState.friend,
    audience: reduxState.audience,
    fifty: reduxState.fifty
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchQuestion: () => dispatch(fetchQuestionFromAPI()),
    correctAnswerFn: (status) => {
      dispatch(correctAnswer()),
        dispatch(fetchQuestionFromAPI()),
        dispatch(endGame(status))
    },
    incorrectAnswerFn: (status) => {
      dispatch(incorrectAnswer('INCORRECT_ANSWER')),
        dispatch(endQuestions()),
        dispatch(endGame(status))
    },
    walkFn: () => {
      dispatch(incorrectAnswer('WALK')),
        dispatch(endQuestions()),
        dispatch(endGame('LOSE'))
    },
    friendLine: (help) => { dispatch(friendline(help)) },
    audienceLine: (help) => { dispatch(audienceline(help)) },
    fiftyLine: (help) => { dispatch(fiftyline(help)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);