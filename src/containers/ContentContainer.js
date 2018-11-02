import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = state => {
    return {
        view: state.content.view
    }
}

export default connect(
    mapStateToProps
)(Content)