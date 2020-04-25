import React from 'react';

export default ({name, date, desc}) => {
    return (
        <>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{desc}</p>
        </>
    )
}