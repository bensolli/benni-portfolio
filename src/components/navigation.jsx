import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="col-sm-12">
        <nav>
            <ul className="[ navigation-container ]">
                <Link to="Dashboard"><li className="[ navigation-container__nav-element ]">Explore</li></Link>
                <Link to="Gallery"><li className="[ navigation-container__nav-element ]">Gallery</li></Link>
                <Link to="/Bio"><li className="[ navigation-container__nav-element ]">BIO</li></Link>
                <Link to="/Contact"><li className="[ navigation-container__nav-element ]">Contact</li></Link>
                <Link to="/Backgrounds"><li className="[ navigation-container__nav-element ]">Theme</li></Link>
            </ul>
        </nav>
        </div>
    )
}

