import React from 'react';
import { Link } from 'react-router-dom';

import "../static/styles/navigation.scss";

function Navigation(props) {
    return (
        <div className="navigation">
            <Link to="/start" className="navigation__item">Start</Link>
            {/* <Link to="/quiz" className="navigation__item">Quiz</Link> */}
            <Link to="/leaderboard" className="navigation__item">Leaderboard</Link>
        </div>
    )
}
export default Navigation;