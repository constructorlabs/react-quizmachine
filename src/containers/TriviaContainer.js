import { connect } from 'react-redux';
import Trivia from '../components/Trivia';

const mapStateToProps = state => ({
  score: state.session.score,
  difficulty: state.session.difficulty,
  lives: state.session.lives,
  trivia: state.trivia,
  response: state.response,
  gifUrl: state.gif.url,
});

export default connect(
  mapStateToProps,
  null,
)(Trivia);
