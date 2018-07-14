import { combineReducers } from 'redux';
import quizQuestion from './quizQuestion';
import quizAnswer from './quizAnswer';
import score from './score';

export default combineReducers({
  quizQuestion,
  quizAnswer,
  score
});
