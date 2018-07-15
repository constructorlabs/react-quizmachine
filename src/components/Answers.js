import React from 'react';
import cx from 'classnames';
import '../static/styles/answers.scss';

function Answers({ answers, isRightAnswer, score, scoreUpdate, requestQuestion }) {

    const question_answers = answers
        ? [...answers.results[0].incorrect_answers, answers.results[0].correct_answer]
        : [];

    const shuffled_answers = question_answers; //.sort(() => 0.5 - Math.random());

    function verifyAnswer(e, answer) {
        e.preventDefault();
        if (answer === answers.results[0].correct_answer) {
            console.log("Correct!");
            isRightAnswer(true);
            scoreUpdate(score + 10);
            e.target.classList.add('answers__button--correct-answer');
            e.target.classList.add('animated');
            e.target.classList.add('pulse');
            setTimeout(() => {
                requestQuestion();
                isRightAnswer(false);
            }, 2000)
        } else {
            console.log("Wrong!");
            isRightAnswer(false);
            scoreUpdate(score - 10);
            e.target.classList.add('animated');
            e.target.classList.add('shake');
            e.target.classList.add('answers__button--wrong-answer');
            e.target.setAttribute("disabled", "disabled");
        }
    }


    return (
        <div className="answers">
            {shuffled_answers.map(answer => {
                return <button
                    type="button"
                    onClick={(e) => verifyAnswer(e, answer)}
                    key={answer}
                    className={cx('answers__button', {
                        "answers__button--disabled": false
                    })}>
                    {decodeURIComponent(answer)}
                </button>
            })}
        </div>
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
