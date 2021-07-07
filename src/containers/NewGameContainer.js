import { connect } from 'react-redux';
import NewGame from '../components/NewGame';
import { setDifficulty, setTriviaType, setCategory, startSession } from '../actions';

const mapStateToProps = state => ({
  difficulty: state.session.difficulty,
  triviaType: state.session.triviaType,
  category: state.session.category,
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
