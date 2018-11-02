import { connect } from 'react-redux';
import GameOver from '../components/GameOver';
import {
  setStage,
  setScore,
  setLives,
  resetProgress,
  setDifficulty,
  setTriviaType,
  resetTrivia,
  setResponse,
} from '../actions';

const mapDispatchToProps = dispatch => ({
  getRestart: () => {
    dispatch(setStage('newGame'));
    dispatch(setLives(3));
    dispatch(setScore(0));
    dispatch(resetProgress(0));
    dispatch(setTriviaType('any'));
    dispatch(setDifficulty('easy'));
    dispatch(setResponse({}));
    dispatch(resetTrivia());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(GameOver);
