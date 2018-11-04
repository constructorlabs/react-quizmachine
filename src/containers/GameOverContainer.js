import { connect } from 'react-redux';
import GameOver from '../components/GameOver';
import { setStage, resetTrivia, setResponse, setHighScores, resetSession } from '../actions';

const mapStateToProps = state => ({
  highScores: state.highScores,
  sessionId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  getRestart: () => {
    dispatch(setStage('newGame'));
    dispatch(setResponse({}));
    dispatch(resetTrivia());
    dispatch(setHighScores([]));
    dispatch(resetSession());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameOver);
