import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';

export const mapStateToProps = reduxStore => {
    return {
        questionAnswer: reduxStore.quizAnswer
    }
}

export default connect(
    mapStateToProps,
    null
)(Message);