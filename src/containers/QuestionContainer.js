import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestionFromAPI, setAnswer } from "../actions";

export const mapStateToProps = state => {
  console.log("2. getting action creator");
  console.log("Step 6 - calling mapStateToProps in QuestionContainer");
  return {
    question: state.question.question,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    questionFetch: () => {
      dispatch(fetchQuestionFromAPI());
    },
    answerClickHandle: answer => {
      alert(answer);
      dispatch(setAnswer(answer));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
