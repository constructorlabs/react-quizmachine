import React from 'react';
import cx from 'classnames';

import '../static/styles/leaderboard.scss';

class Leaderboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: [Object.keys(this.props.leaderboard).length],
            playerName: '',
            sorted: [],
            leaderboardNameAdded: false
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    componentWillMount() {
        const sorted = Object.keys(this.props.leaderboard).sort((a, b) => {
            return this.props.leaderboard[b].points - this.props.leaderboard[a].points
        });

        this.setState({
            sorted: sorted
        })
    }

    onSubmitHandler(e) {
        e.preventDefault();
        this.setState({
            [+this.state.id + 1]: {
                player: this.state.playerName,
                points: this.props.score
            }
        });

        const leaders = Object.assign({}, this.props.leaderboard, {
            [+this.state.id + 1]: {
                player: this.state.playerName,
                points: this.props.score
            }
        }
        )
        this.props.leaderboardList(leaders);

        const sorted = Object.keys(leaders).sort((a, b) => {
            return leaders[b].points - leaders[a].points
        });

        this.setState({
            sorted: sorted,
            leaderboardNameAdded: true
        })
    }

    onChangeHandler(e) {
        this.setState({
            playerName: e.target.value
        });
    }

    render() {
        return (
            <div className="leaderboard">
                <h3>Leaderboard</h3>
                <form onSubmit={e => this.onSubmitHandler(e)}
                    className={cx('leaderboard__form', {
                        "leaderboard__form--name-added": this.state.leaderboardNameAdded
                    })}>
                    <fieldset className="leaderboard__form--wrapper">
                        <legend>Add your name to the list</legend>
                        <label htmlFor="leaderboard__form-input">Total points: {this.props.score}</label>
                        <div className="leaderboard__form-input--box">
                            <input name="leaderboard__form-input" className="leaderboard__form-input" onChange={e => this.onChangeHandler(e)} type="text" placeholder="Name" />
                            <button className="leaderboard__form-button">Add</button>
                        </div>
                    </fieldset>
                </form>

                <div className="leaderboard__list">
                    <div className="leaderboard__list--body">
                        <div className="leaderboard__list--row">
                            <div className="leaderboard__list--cell">&nbsp;</div>
                            <div className="leaderboard__list--cell">Player</div>
                            <div className="leaderboard__list--cell">Points</div>
                        </div>
                        {
                            Object.keys(this.props.leaderboard).map((rank, index) => {
                                return <div key={this.props.leaderboard[this.state.sorted[index]].player} className="leaderboard__list--row">
                                    <div className="leaderboard__list--cell">{index + 1}</div>
                                    <div className="leaderboard__list--cell">{this.props.leaderboard[this.state.sorted[index]].player}</div>
                                    <div className="leaderboard__list--cell">{this.props.leaderboard[this.state.sorted[index]].points}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div >
        );
    }
}
export default Leaderboard;