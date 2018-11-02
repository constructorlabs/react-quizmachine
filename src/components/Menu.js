import React from 'react';

function Menu({ receiveView }){

    return(
        <div>
            <h1>It's Quizness Time!</h1>
            <label>Please select difficulty:</label>
            <select>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="Random">Random</option>
            </select>
            <button onClick={() => receiveView("quiz")}>Lets get down to Quizness!</button>
        </div>
    )
}


export default Menu;