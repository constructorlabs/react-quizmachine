import React from "react";

class Questions extends React.Component {

    constructor() {
        super();
        // this.mixQuestions = this.mixQuestions.bind(this);
    }


    componentDidMount(){
        this.props.fetchQuestion()
        // this.mixQuestions()
        }
    

    render() {
        console.log(this.props.questions)
     let answerList = (this.props.questions.incorrect_answers === undefined) 
     ? 
     null : 
     [...this.props.questions.incorrect_answers, this.props.questions.correct_answer].map((answer) =>
     <button key={answer} onClick={() => this.props.clickHandler(this.props.questions.correct_answer === answer)}>{answer}</button>
   );

  return (
    <div className="quiz__display">
     <div>
         <h2>{this.props.questions.question}</h2>
         <ul>{answerList}</ul>
     </div>
    </div>
  );
}
}

// {this.props.questions.length > 0 ? 
//     <div key={this.props.questions.question}>
//         <h2 key={this.props.questions.question}>
//         {this.props.questions.question}</h2>
//         {this.props.questions.incorrect_answers}
        
//     </div> : 
//     <h3>I haven't fetched yet</h3>}

    

export default Questions;
