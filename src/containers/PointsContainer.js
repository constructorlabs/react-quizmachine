import { connect } from 'react-redux';
import Points from '../components/Points';
import {} from '../actions'

const mapStateToProps = state => {
    return {
        points: state.points.points
    }
}

export default connect(
    mapStateToProps
)(Points)