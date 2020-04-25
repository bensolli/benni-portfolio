import React from 'react';
import { Link } from 'react-router-dom';

export default ({ img, name, id }) => {
    return (
        <>
            <ul className="[ gallery-title ]">
                <li>{name} - </li>
                <Link to={`/gallerySpecific/${id}`}><li>Read more</li></Link>
            </ul>
            <img className="[ gallery-img ]" src={img} alt="Some tag" />
        </>
    )
}