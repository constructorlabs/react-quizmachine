import React from "react";

class Score extends React.Component {

    constructor() {
        super();
        // this.mixQuestions = this.mixQuestions.bind(this);
    }


  

    render() {
        
        // let emotion =  === true ? "/static/img/basket_full.png": "/static/img/basket.png";
        
        // if (this.props.score  0) {
        //     emotion = "/static/img/basket_full.png";
        // } else if ( ) {
        //     greeting = "/static/img/basket.png";
        // }

        // return (
        //   <div className="nav">
        //     <img className="nav__logo" src="/static/img/logo.png" />
        //     <img className="nav__basket" onClick={() => this.props.openBasket()} src={basketFull}/>
        //   </div>




  return (
    <div className="score">
     <div>
         <h2>SCORE: {this.props.score}</h2>
         {/* <img src=`{this.props.score}.jpg`/>
         <img className="nav__logo" src="/img/0.jpg" />

         <img src="${this.props.score}.jpg">
          */}
     </div>
    </div>
  );
}
}

    

export default Score;
