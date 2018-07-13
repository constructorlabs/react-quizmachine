import React from 'react';
import Header from './Header';
import GameContainer from '../containers/GameContainer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <GameContainer />
      </div>
    )
  }
}

export default App;
