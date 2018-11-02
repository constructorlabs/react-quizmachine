import { connect } from 'react-redux';
import Points from '../components/Points';
import {} from '../actions'

const mapStateToProps = state => {
    console
    return {
        points: state.points
    }
}

export default connect(
    mapStateToProps
)(Points)