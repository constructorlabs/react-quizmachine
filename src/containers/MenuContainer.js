import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { receiveView, receiveDifficulty } from '../actions';

const mapStateToProps = state => {
    return {
        difficulty: state.menu.difficulty
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receiveView: (view) => dispatch(receiveView(view)),
        receiveDifficulty: (difficulty) => dispatch(receiveDifficulty(difficulty))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)