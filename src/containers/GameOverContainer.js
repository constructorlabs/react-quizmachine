import { connect } from "react-redux";
import GameOver from "../components/GameOver";

export const mapStateToProps = state => {
  return {
    score: state.question.score,
  };
};

export default connect(mapStateToProps)(GameOver);
