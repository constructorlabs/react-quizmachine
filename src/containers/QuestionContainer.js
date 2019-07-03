import { connect } from "react-redux";
import Question from "../components/Question";
import {
  fetchQuestionFromAPI,
  checkAnswer,
  endQuestions,
  endGame,
  friendline,
  audienceline,
  fiftyQuestions,
  restart
} from "../actions";

const mapStateToProps = reduxState => {
  // console.log("container reply", reduxState.reply)
  return {
    quizData: reduxState.question,
    money: reduxState.money,
    status: reduxState.endGame,
    friend: reduxState.friend,
    audience: reduxState.audience,
    fifty: reduxState.fifty,
    response: reduxState.reply
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestion: () => dispatch(fetchQuestionFromAPI()),
    correctAnswerFn: status => {
      dispatch(checkAnswer("CORRECT_ANSWER")),
        dispatch(fetchQuestionFromAPI()),
        dispatch(endGame(status));
    },
    incorrectAnswerFn: status => {
      dispatch(checkAnswer("INCORRECT_ANSWER")),
        dispatch(endQuestions()),
        dispatch(endGame(status));
    },
    walkFn: () => {
      dispatch(checkAnswer("WALK")),
        dispatch(endQuestions()),
        dispatch(endGame("LOSE"));
    },
    friendLine: help => {
      dispatch(friendline(help));
    },
    audienceLine: help => {
      dispatch(audienceline(help));
    },
    fiftyLine: help => {
      dispatch(fiftyQuestions(help));
    },
    newGame: () => {
      dispatch(restart()), dispatch(fetchQuestionFromAPI());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
