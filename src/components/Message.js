import React from 'react';
import '../static/styles/message.scss';
import cx from 'classnames';

function Message({ questionAnswer, score, viewMessage, updateMessage }) {
    const CSSClasses = cx('message ', {
        visible: viewMessage,
        animated: questionAnswer,
        fadeIn: questionAnswer,
    });
    const CoverClasses = cx('cover ', {
        visible: viewMessage
    });

    setTimeout(() => {
        updateMessage(false);
    }, 1500);

    return (
        <div>
            <div className={CSSClasses}>
                <span className="message__text">{questionAnswer ? "+ 10 points!" : "- 10 points!"}</span>
            </div>
            <div className={CoverClasses}></div>
        </div>

    );
}

export default Message;