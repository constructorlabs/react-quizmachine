import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestionFromAPI, correctAnswer, incorrectAnswer, endQuestions, endGame, lifeline } from "../actions";



const mapStateToProps = (reduxState) => {

  console.log("Step 6 - calling mapStateToProps in QuestionContainer", reduxState["question"])
  console.log("Step 6 - lifeline", reduxState.lifeLine)

  return {
    question: reduxState.question,
    money: reduxState.money,
    status: reduxState.endGame,
    lifeLine: reduxState.lifeLine
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
    lifelineFn: () => { dispatch(lifeline()) }
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Question);