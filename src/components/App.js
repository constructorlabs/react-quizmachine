import React from 'react';
import {QuestionContainer} from '../containers/QuestionContainer';
import ScoreTableContainer from '../containers/ScoreTableContainer';
import CategoryContainer from '../containers/CategoryContainer';
import '../style/App.scss';

class App extends React.Component {
  render(){
    return (
      <div className='wrapper'>
        <CategoryContainer/>
      {!this.props.scores.gameOver ?  <QuestionContainer/>
      :<ScoreTableContainer/>}
      </div>
    )
  }
}

export default App;
