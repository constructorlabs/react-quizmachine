import { connect } from 'react-redux';
import NewGame from '../components/NewGame';
import { setDifficulty, setScore, setLives, fetchTrivia } from '../actions';

const mapDispatchToProps = dispatch => ({
  getDifficulty: difficulty => {
    dispatch(setDifficulty(difficulty));
    dispatch(setLives(3));
    dispatch(setScore(0));
    dispatch(fetchTrivia());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewGame);
