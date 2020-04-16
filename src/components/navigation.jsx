import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <nav>
            <ul className="[ navigation-container ]">
                <Link to="/"><li className="[ navigation-container__nav-element ]">Homepage</li></Link>
                <Link to="/About"><li className="[ navigation-container__nav-element ]">About</li></Link>
                <Link to="/Contact"><li className="[ navigation-container__nav-element ]">Contact</li></Link>
            </ul>
        </nav>
    )
}

