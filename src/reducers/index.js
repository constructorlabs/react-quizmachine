import { combineReducers } from 'redux';
import questionsResults from './QuestionsResults';
import score from './score';
import correct_answer from './correct_answer';
import image from './image';




export default combineReducers({
  questionsResults,
  score,
  correct_answer,
  image
  
});
