import React from 'react';
import Header from './Header';
import OptionsContainer from '../containers/OptionsContainer';
import ScoreContainer from '../containers/ScoreContainer';
import QuestionContainer from '../containers/QuestionContainer';
import AnswersContainer from '../containers/AnswersContainer';
import MessageContainer from '../containers/MessageContainer';
import ButtonSkipQuestionContainer from '../containers/ButtonSkipQuestionContainer';

import '../static/styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="quiz-wrapper">
        <Header />
        <OptionsContainer />
        <ScoreContainer />
        <QuestionContainer />
        <AnswersContainer />
        <MessageContainer />
        <ButtonSkipQuestionContainer />
      </div>
    )
  }
}

export default App;
