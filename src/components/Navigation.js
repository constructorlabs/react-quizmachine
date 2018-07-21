import React from 'react';
import { Link } from 'react-router-dom';

import "../static/styles/navigation.scss";

function Navigation(props) {
    return (
        <div className="navigation">
            <Link to="/start" className="navigation__item">Start</Link>
            {/* <Link to="/quiz" className="navigation__item">Quiz</Link> */}
            <Link to="/hall-of-fame" className="navigation__item">Hall Of Fame</Link>
        </div>
    )
}
export default Navigation;