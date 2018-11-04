import { connect } from 'react-redux';
import Trivia from '../components/Trivia';

const mapStateToProps = state => ({
  score: state.score,
  difficulty: state.difficulty,
  lives: state.lives,
  trivia: state.trivia,
  response: state.response,
  gifUrl: state.gif.url,
});

export default connect(
  mapStateToProps,
  null,
)(Trivia);
