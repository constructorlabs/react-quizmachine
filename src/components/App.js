import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';
// import AnswerContainer from '../containers/QuestionContainer';
// import ScoreContainer from '../containers/QuestionContainer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Who wants to be a Bazillionaire?</h1>
        </header>
        <section className="imageArea">
          <img src="http://placepuppy.net/150/200" />
        </section>
        <main className="question">
          <QuestionContainer />
        </main>
        {/* <AnswerContainer />
        <ScoreContainer /> */}
      </div>
    )
  }
}

export default App;
