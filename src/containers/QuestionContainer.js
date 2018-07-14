import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestionFromAPI, correctAnswer, incorrectAnswer } from "../actions";


const mapStateToProps = (reduxState) => {

  console.log("Step 6 - calling mapStateToProps in QuestionContainer", reduxState["question"])
  console.log("Step 6 - money", reduxState.money)

  return {
    question: reduxState.question,
    money: reduxState.money
  };
};

const mapDispatchToProps = dispatch => {
  console.log("Step 2: getting action creator");
  return {
    fetchQuestion: () => dispatch(fetchQuestionFromAPI()),
    correctAnswerFn: () => {
      dispatch(correctAnswer()),
        dispatch(fetchQuestionFromAPI())
    },
    incorrectAnswerFn: () => dispatch(incorrectAnswer())
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Question);