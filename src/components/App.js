import React from 'react';
import Header from './Header';
import QuestionContainer from '../containers/QuestionContainer';

import '../static/styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="quiz-wrapper">
        <Header />
        <QuestionContainer />
      </div>
    )
  }
}

export default App;
