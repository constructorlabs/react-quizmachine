import { connect } from 'react-redux';
import Menu from '../components/Menu';
import {receiveView} from '../actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        receiveView: (view) => dispatch(receiveView(view))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)