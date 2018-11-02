import ScoreTable from '../components/ScoreTable';
import {connect} from 'react-redux';
// import {displayScores} from '../actions';

const mapStateToProps = (state) => {
  return {
    currentScore:state.scores.currentScore,
    allScores: state.scores.allScores
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     displayScores: ()=> dispatch(displayScores())
//   }
// }

export default connect(mapStateToProps)(ScoreTable);
