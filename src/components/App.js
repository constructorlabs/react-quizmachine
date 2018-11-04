import React from 'react';
import QuestionsContainer from '../containers/QuestionsContainer';
import ScoreContainer from '../containers/ScoreContainer';
import Nav from '../components/Nav';


class App extends React.Component {


 


  render(){
    return (
      <div>
        <Nav />     
        <QuestionsContainer />
        <ScoreContainer/>
      </div>
    )
  }
}

export default App;
