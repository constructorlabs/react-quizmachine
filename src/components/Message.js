import React from 'react';

function Message({ questionAnswer }) {
    return (
        <div>{questionAnswer ? "Right!" : ""}</div>
    );
}

export default Message;