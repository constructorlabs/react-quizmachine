import React from "react";
import { decode } from 'he';

class Questions extends React.Component {

    constructor() {
        super();
    }


    componentDidMount(){
        this.props.fetchQuestion()
        }
    

    render() {
        console.log(this.props.questions)
     let answerList = (this.props.questions.incorrect_answers === undefined) 
     ? 
     null : 
     

     [...this.props.questions.incorrect_answers, this.props.questions.correct_answer]
     .sort(function() { return 0.5 - Math.random() })
     .map((answer) =>
     <button className ="voting-button" key={answer} onClick={() => this.props.clickHandler(this.props.questions.correct_answer === answer)}>{answer}</button>
   );
   
   let questionDecoded = (this.props.questions.question === undefined) ? null : decode(this.props.questions.question)
   // decoding HTML entities in questions using 'he' - ternary to cover initial undefined state.

  return (
    <div className="quiz__display" 
     style = {{backgroundImage: `url(${this.props.image})`}}>
     <div>
         <h2>{questionDecoded}</h2>
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
