import React from 'react';
import {QuestionContainer} from '../containers/QuestionContainer';
import ScoreTableContainer from '../containers/ScoreTableContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <QuestionContainer/>
      {this.props.scores.gameOver && <ScoreTableContainer/>}
      </div>
    )
  }
}

export default App;
