import { combineReducers } from 'redux';
import question from './question';
import points from './points';
import content from './content';
import menu from './menu';
import scoreboard from './scoreboard';

export default combineReducers({
  question,
  points,
  content,
  menu,
  scoreboard
});
