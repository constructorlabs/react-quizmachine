import { connect } from 'react-redux';
import NewGame from '../components/NewGame';
import { setDifficulty, setTriviaType, setCategory, startSession } from '../actions';

const mapStateToProps = state => ({
  difficulty: state.difficulty,
  triviaType: state.triviaType,
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  getDifficulty: difficulty => dispatch(setDifficulty(difficulty)),
  getTriviaType: type => dispatch(setTriviaType(type)),
  getCategory: category => dispatch(setCategory(category)),
  startGame: () => dispatch(startSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewGame);
