import React from 'react';
import cx from 'classnames';

class ButtonAnswer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false
        }

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        this.setState({
            isClicked: true
        })
    }


    render() {
        return (
            <button
                type="button"
                onClick={(e) => {
                    this.props.verifyAnswer(e, this.props.answer);
                    this.props.endOfQuestions();
                    this.onClickHandler();
                }}
                key={this.props.answer}
                className={cx('answers__button', {
                    'animated': !this.props.isRight && this.state.isClicked || this.props.isRight && this.state.isClicked,
                    "answers__button--correct-answer": this.props.isRight && this.state.isClicked,
                    'pulse': this.props.isRight && this.state.isClicked,
                    "answers__button--wrong-answer": !this.props.isRight && this.state.isClicked,
                    'shake': !this.props.isRight && this.state.isClicked
                })}>
                {decodeURIComponent(this.props.answer)}
            </button>
        )
    }
}

export default ButtonAnswer;