import { connect } from "react-redux";
import Scoreboard from "../components/Scoreboard";
import { receivePlayerName, submitScore } from "../actions";

const mapStateToProps = state => {
  return {
    points: state.points.points,
    difficulty: state.menu.difficulty,
    name: state.scoreboard.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receivePlayerName: name => dispatch(receivePlayerName(name)),
    submitScore: (name, points, difficulty) => dispatch(submitScore(name, points, difficulty))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoreboard);
