import { combineReducers } from 'redux';
import questionsResults from './QuestionsResults';
import score from './score';
import correct_answer from './correct_answer';





export default combineReducers({
  questionsResults,
  score,
  correct_answer
  
});
