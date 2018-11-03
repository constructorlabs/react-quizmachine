import { connect } from "react-redux";
import Question from "../components/Question";
import { fetchQuestion, receiveAnswer, receiveView } from "../actions";

const mapStateToProps = state => {
  return {
    question: state.question.question,
    numberOfQuestions: state.question.numberOfQuestions,
    correct: state.points.correct,
    difficulty: state.menu.difficulty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: difficulty => dispatch(fetchQuestion(difficulty)),
    receiveAnswer: (answer, question, quizDifficulty) =>
      dispatch(
        receiveAnswer(answer, question, quizDifficulty)
      ),
    receiveView: view => dispatch(receiveView(view))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
