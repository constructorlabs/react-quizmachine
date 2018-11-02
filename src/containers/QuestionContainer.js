import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestionFromAPI, setAnswer } from "../actions";

export const mapStateToProps = state => {
  return {
    question: state.question.question,
    score: state.question.score,
    correctAnswer: state.question.correctAnswer,
    userAnswer: state.question.userAnswer,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    questionFetch: () => {
      dispatch(fetchQuestionFromAPI());
    },
    answerClickHandle: answer => {
      //   alert(answer);
      dispatch(setAnswer(answer));
      dispatch(fetchQuestionFromAPI());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
