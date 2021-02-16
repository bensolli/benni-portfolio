import React from 'react';

export default ({ img, desc, links1, links2, linkDescription1, linkDescription2, name, iframe }) => {
    return (
        <>
                    <img className="[ gallery-img ]" src={img} alt="Some tag" />
                        <br />
                        <h1>{name}</h1>
                        <p>{desc}</p>
                        <br />
                        <ul>
                            <li>{linkDescription1} <a href={links1} alt="link">{links1}</a></li>
                            <li>{linkDescription2} <a href={links2} alt="link">{links2}</a></li>
                        </ul>
                        <iframe style={{width: 100 + '%', height: 400 + 'px'}} src={iframe}  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"></iframe>
        </>
    )
}