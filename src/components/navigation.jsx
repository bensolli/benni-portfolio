import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <nav>
            <ul className="[ navigation-container ]">
                <Link to="Dashboard"><li className="[ navigation-container__nav-element ]">Explore</li></Link>
                <Link to="/Contact"><li className="[ navigation-container__nav-element ]">Contact</li></Link>
                <Link to="/Backgrounds"><li className="[ navigation-container__nav-element ]">Backgrounds</li></Link>
            </ul>
        </nav>
    )
}

