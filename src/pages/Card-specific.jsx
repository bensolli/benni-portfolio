import React, { useState, useEffect } from 'react';
import CardsSpecific from '../components/cardSpecific'


export default () => {
    const [characters, setCharacters] = useState(undefined);

    return (
                <CardsSpecific
                    id={characters.id}
                    image={characters.imageUrl}
                    name={characters.name}
                    type={characters.type}
                    rarity={characters.rarity}
                    colors={characters.colors}
                    text={characters.text}
                />

    );
}
