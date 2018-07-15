import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestionFromAPI, correctAnswer, incorrectAnswer, endQuestions, endGame, friendline, audienceline, fiftyline } from "../actions";



const mapStateToProps = (reduxState) => {

  console.log("Step 6 - calling mapStateToProps in QuestionContainer", reduxState["question"])
  console.log("Step 6 - lifeline", reduxState.lifeLine)

  return {
    question: reduxState.question,
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
    correctAnswerFn: () => {
      dispatch(correctAnswer()),
        dispatch(fetchQuestionFromAPI())
    },
    incorrectAnswerFn: () => {
      dispatch(incorrectAnswer()),
        dispatch(endQuestions()),
        dispatch(endGame())
    },
    friendLine: (help) => { dispatch(friendline(help)) },
    audienceLine: (help) => { dispatch(audienceline(help)) },
    fiftyLine: (help) => { dispatch(fiftyline(help)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);