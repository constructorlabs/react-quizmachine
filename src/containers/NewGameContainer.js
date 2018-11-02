import { connect } from 'react-redux';
import NewGame from '../components/NewGame';
import { setDifficulty, setTriviaType, fetchTrivia } from '../actions';

const mapDispatchToProps = dispatch => ({
  getDifficulty: difficulty => {
    dispatch(setDifficulty(difficulty));
  },
  getTriviaType: type => {
    dispatch(setTriviaType(type));
  },
  startGame: () => {
    dispatch(fetchTrivia());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewGame);
