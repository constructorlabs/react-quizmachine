import ScoreTable from '../components/ScoreTable';
import {connect} from 'react-redux';
import {restart} from '../actions';

const mapStateToProps = (state) => {
  return {
    currentScore:state.scores.currentScore,
    allScores: state.scores.allScores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    restart: () => dispatch(restart())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ScoreTable);
