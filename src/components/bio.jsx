import React from 'react';

export default ({ title, name, subtitle, ingress }) => {
    return (
        <>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <h3><strong>{subtitle}</strong></h3>
            <br />
            <h4>{ingress}</h4>
            <br />
        </>
    )
}