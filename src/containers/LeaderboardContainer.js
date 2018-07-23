import { connect } from 'react-redux'
import Leaderboard from '../components/Leaderboard';
import {
    leaderboardList
} from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        score: reduxStore.score,
        leaderboard: reduxStore.leaderboard
    };
};

const mapDispatchToProps = dispatch => {
    return {
        leaderboardList: data => dispatch(leaderboardList(data))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Leaderboard);