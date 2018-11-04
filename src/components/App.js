import React from 'react';
import {QuestionContainer} from '../containers/QuestionContainer';
import ScoreTableContainer from '../containers/ScoreTableContainer';
import CategoryContainer from '../containers/CategoryContainer';
import '../style/App.scss';

class App extends React.Component {

  render(){

    return (
      <div className='wrapper'>

      {!this.props.scores.gameOver ?
        <div>
        <CategoryContainer/>
        <QuestionContainer/>
        <img src={this.props.image}/>
        </div>

      :
      <div>

      <ScoreTableContainer/>
      <img src={this.props.image}/>
      </div>
    }
      </div>
    )
  }
}

export default App;
