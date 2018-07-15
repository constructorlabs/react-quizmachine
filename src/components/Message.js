import React from 'react';
import '../static/styles/message.scss';
import cx from 'classnames';

function Message({ questionAnswer }) {
    const CSSClasses = cx('message ', {
        visible: questionAnswer,
        animated: questionAnswer,
        fadeIn: questionAnswer,
    });
    return (
        <div className={CSSClasses}>
            <span className="message__text">{questionAnswer ? "Correct!" : ""}</span>
        </div>
    );
}

export default Message;