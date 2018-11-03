import React from "react";



class Scoreboard extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
        <div>
          <h2>Well done, you scored {this.props.points} points!</h2>
          <p>Enter your name below to add your score to the scoreboard</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.submitScore(this.props.name, this.props.points, this.props.difficulty);
            }}
          >
            <input
              onChange={(event) => this.props.receivePlayerName(event.target.value)}
              placeholder="Please enter your name here"
            />
            <button type="submit">Add score</button>
          </form>
        </div>
        )
    }
}

export default Scoreboard;
