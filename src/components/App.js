import React from 'react';
import PropTypes from 'prop-types';
import NewGameContainer from '../containers/NewGameContainer';
import TriviaContainer from '../containers/TriviaContainer';
import GameOverContainer from '../containers/GameOverContainer';
import '../../styles/components/App.scss';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    const { store } = this.context;
    const reduxState = store.getState();

    this.state = {
      stage: reduxState.stage,
    };
  }

  componentDidMount() {
    const { store } = this.context;
    store.subscribe(() => {
      this.updateFromStore();
    });
  }

  updateFromStore() {
    const { store } = this.context;
    const reduxState = store.getState();
    this.setState({
      stage: reduxState.stage,
    });
  }

  render() {
    const { stage } = this.state;
    return (
      <div className="app">
        {stage === 'newGame' && <NewGameContainer />}
        {stage === 'trivia' && <TriviaContainer />}
        {stage === 'gameOver' && <GameOverContainer />}
        <div className="footer">© 2018, Yetkin Ergun. Powered by the Open Trivia API</div>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object,
};

export default App;
