import React from 'react';
import { Link } from 'react-router-dom';

export default ({ img, name, id }) => {
    return (
        <>

            <div className="workCard">
            <img className="[ workCard-img ]" src={img} alt="Some tag" />
            <div className="workCard-title">
                <h3>{name}</h3>
            </div>
            <Link to={`/gallery/${id}`}></Link>
            </div>

        </>
    )
}