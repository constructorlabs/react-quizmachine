import React from 'react';
import QuestionContainer from '../containers/QuestionContainer'
import PointsContainer from '../containers/PointsContainer'

class App extends React.Component {
  render(){
    return (
      <div>
        <QuestionContainer />
        <PointsContainer />
      </div>
    )
  }
}

export default App;
