import { connect } from 'react-redux';
import Answers from '../components/Answers';
import { analyzeResponse } from '../actions';

const mapStateToProps = state => ({
  answers: state.trivia.answers,
  response: state.response,
});

const mapDispatchToProps = dispatch => ({
  getResponse: response => dispatch(analyzeResponse(response)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Answers);
