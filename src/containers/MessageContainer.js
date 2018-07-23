import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';
import { viewMessage } from '../actions';

export const mapStateToProps = reduxStore => {
    return {
        questionAnswer: reduxStore.quizAnswer,
        score: reduxStore.score,
        viewMessage: reduxStore.viewMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateMessage: isVisible => dispatch(viewMessage(isVisible))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Message);