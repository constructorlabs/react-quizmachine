import { connect } from 'react-redux'
import HallOfFame from '../components/HallOfFame';
// import {
//     fetchQuestion,
//     isRightAnswer,
//     scoreUpdate,
//     currentQuestion
// } from '../actions';

export const mapStateToProps = reduxStore => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HallOfFame);