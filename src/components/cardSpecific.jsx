import React from 'react';

export default ({ name, image, type, rarity, colors, text }) => {
    return (
        <>
            <div className="[ cards-specific ]">
                <div className="row">
                    <div className="[ col-sm-4 ]">
                        <img src={image} alt="Some tag" />
                    </div>
                    <div className="[ col-sm-8 ]">
                        <div className="[ cards-specific__description ]">
                            <h3>{name}</h3>
                            <ul>
                                <li><label>origin:</label> {name}</li>
                                <li><label>type:</label> {type}</li>
                                <li><label>Rarity:</label> {rarity}</li>
                                <li><label>color:</label> {colors}</li>
                            </ul>
                            <p><label>About:</label> {text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
