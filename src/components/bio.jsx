import React from 'react';

export default ({ title, name, subtitle, ingress }) => {
    return (
        <>
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p><strong>{subtitle}</strong></p>
            <br />
            <h4>{ingress}</h4>
            <br />
        </>
    )
}