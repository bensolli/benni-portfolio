import React from 'react';
import { Link } from 'react-router-dom';

export default ({ image, name, id }) => {
    return (
        <>
            <div className="[ col-sm-3 ]">
                <div className="[ cards ]">
                    <img src={image} alt="Some tag" />
                    <div className="[ cards__description ]">
                        <h5>{name}</h5>
                        <Link to={`/cardSpecific/${id}`}></Link>
                    </div>
                </div>
            </div>
        </>
    )
}