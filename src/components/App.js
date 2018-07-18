import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import StartContainer from '../containers/StartContainer';
import OptionsContainer from '../containers/OptionsContainer';
import ScoreContainer from '../containers/ScoreContainer';
import QuestionContainer from '../containers/QuestionContainer';
import AnswersContainer from '../containers/AnswersContainer';
import MessageContainer from '../containers/MessageContainer';
import ButtonSkipQuestionContainer from '../containers/ButtonSkipQuestionContainer';
import HallOfFameContainer from '../containers/HallOfFameContainer';

import '../static/styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="quiz-wrapper">
        <Header />
        <Switch>
          <Route exact path="/" render={props => {
            return <StartContainer />
          }} />
          <Route exact path="/start" render={props => {
            return <StartContainer />
          }} />
          <Route exact path="/quiz" render={props => {
            return <div>
              <OptionsContainer />
              <ScoreContainer />
              <QuestionContainer />
              <AnswersContainer />
              <MessageContainer />
              <ButtonSkipQuestionContainer />
            </div>
          }} />
          />
          <Route exact path="/hall-of-fame" render={props => {
            return <div>
              <HallOfFameContainer />
            </div>
          }} />
          />
        </Switch>


      </div>
    )
  }
}

export default App;
