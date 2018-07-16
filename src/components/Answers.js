import React from 'react';
import cx from 'classnames';
import '../static/styles/answers.scss';

function Answers({
    answers,
    isRightAnswer,
    score,
    scoreUpdate,
    requestQuestion,
    category,
    difficulty,
    incrementCurrentQuestion,
    currentQuestion,
    totalQuestions,
    viewMessage
}) {

    const question_answers = answers
        ? [...answers.results[0].incorrect_answers, answers.results[0].correct_answer]
        : [];

    const shuffled_answers = question_answers; //.sort(() => 0.5 - Math.random());

    function verifyAnswer(e, answer) {
        e.preventDefault();

        if (answer === answers.results[0].correct_answer) {
            isRightAnswer(true);
            e.target.classList.add('animated', 'pulse', 'answers__button--correct-answer');
            scoreUpdate(score + 10);
            incrementCurrentQuestion(currentQuestion + 1);
            setTimeout(() => {
                isRightAnswer(false);
            }, 2000)
            viewMessage(true);
            if (currentQuestion === +totalQuestions) return;
        } else {
            e.target.classList.add('animated', 'shake', 'answers__button--wrong-answer');
            isRightAnswer(false);
            scoreUpdate(score - 10);
            incrementCurrentQuestion(currentQuestion + 1);
            e.target.setAttribute("disabled", "disabled");
            viewMessage(true);
            if (currentQuestion === +totalQuestions) { isRightAnswer(true); return };
        }
    }

    function endOfQuestions() {
        // console.log("currentQuestion", currentQuestion);
        // console.log("totalQuestions", totalQuestions);
        if (currentQuestion === +totalQuestions) {
            // Open end game message
            console.log('game ends');
        } else {
            setTimeout(() => {
                requestQuestion(category, difficulty);
                isRightAnswer(false);
            }, 2000)
        }
    }

    return (
        <div className="answers">
            {shuffled_answers.map(answer => {
                return <button
                    type="button"
                    onClick={(e) => {
                        verifyAnswer(e, answer);
                        endOfQuestions();
                    }}
                    key={answer}
                    className={cx('answers__button', {
                        "answers__button--disabled": false
                    })}>
                    {decodeURIComponent(answer)}
                </button>
            })}
        </div >
    )
}

export default Answers;


// import React from 'react';
// import cx from 'classnames';
// import '../static/styles/answers.scss';

// class Answers extends React.Component {
//     //({ answers, isRightAnswer, score, scoreUpdate })
//     constructor(props) {
//         super(props);
//         this.state = {
//             question_answers: []

//             // shuffled_answers: question_answers //.sort(() => 0.5 - Math.random());
//         }
//     }

//     componentDidMount() {
//         console.log("this.props.answers", this.props)
//         this.setState(
//             {
//                 question_answers: this.props.answers
//                     ? [...this.props.answers.results[0].incorrect_answers, this.props.answers.results[0].correct_answer]
//                     : ['sssss'],
//             }
//         )
//     }

//     verifyAnswer(e, answer) {
//         e.preventDefault();
//         if (answer === this.props.answers.results[0].correct_answer) {
//             console.log("Right!");
//             this.props.isRightAnswer(true);
//             this.props.scoreUpdate(score + 10);
//             e.target.classList.add('correct-answer');
//         } else {
//             console.log("Wrong!");
//             this.props.isRightAnswer(false);
//             this.props.scoreUpdate(score - 10);
//             e.target.classList.add('disabled');
//         }
//     }

//     render() {
//         console.log("this.state.question_answers", this.state.question_answers)
//         return (
//             <div className="answers">
//                 {this.state.question_answers.map(answer => {
//                     return <button
//                         type="button"
//                         onClick={(e) => verifyAnswer(e, answer)}
//                         key={answer}
//                         className={cx('answers__button', {
//                             "answers__button--disabled": false
//                         })}>
//                         {decodeURIComponent(answer)}
//                     </button>
//                 })}
//             </div>
//         )
//     }
// }

// export default Answers;
