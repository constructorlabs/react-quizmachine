import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Who wants to be a Minionaire?</h1>
        </header>

        <QuestionContainer />

      </div>
    )
  }
}

export default App;
