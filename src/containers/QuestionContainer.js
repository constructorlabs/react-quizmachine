import { connect } from "react-redux";
import QuestionMap from "../components/QuestionMap";
import { fetchQuestionFromAPI, setAnswer } from "../actions";

export const mapStateToProps = state => {
  return {
    question: state.question.question,
    score: state.question.score,
    correctAnswer: state.question.correctAnswer,
    userAnswer: state.question.userAnswer,
    questionCount: state.question.questionCount,
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    questionFetch: (difficulty, category) => {
      dispatch(fetchQuestionFromAPI(difficulty, category));
    },
    answerClickHandle: (answer, difficulty, category) => {
      //   alert(answer);
      dispatch(setAnswer(answer));
      dispatch(fetchQuestionFromAPI(difficulty, category));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionMap);
