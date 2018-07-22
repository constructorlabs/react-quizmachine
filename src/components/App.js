import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* <header className="header"> */}
        {/* <img src="minionaire.png" /> */}
        {/* </header> */}

        <QuestionContainer />

      </div>
    )
  }
}

export default App;
