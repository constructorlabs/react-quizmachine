import React from 'react';
function ButtonNext({ requestQuestion, isRightAnswer }) {
    return (
        <button
            onClick={() => { requestQuestion(); isRightAnswer(false) }}>
            Next Question
        </button>
    );
}

export default ButtonNext;