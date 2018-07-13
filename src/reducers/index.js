import { combineReducers } from 'redux';
import quizQuestion from './quizQuestion';
import quizAnswer from './quizAnswer';

export default combineReducers({
  quizQuestion,
  quizAnswer
});
