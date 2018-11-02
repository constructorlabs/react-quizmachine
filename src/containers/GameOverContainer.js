import { connect } from 'react-redux';
import GameOver from '../components/GameOver';
import { setStage } from '../actions';

const mapDispatchToProps = dispatch => ({
  getRestart: () => dispatch(setStage('newGame')),
});

export default connect(
  null,
  mapDispatchToProps,
)(GameOver);
