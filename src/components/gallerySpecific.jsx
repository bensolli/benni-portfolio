import React from 'react';

export default ({ img, desc, links1, links2, linkDescription1, linkDescription2 }) => {
    return (
        <>
                    <img className="[ gallery-img ]" src={img} alt="Some tag" />
                        <br />
                        <p>{desc}</p>
                        <br />
                        <ul>
                            <li>{linkDescription1} <a href={links1} alt="link">{links1}</a></li>
                            <li>{linkDescription2} <a href={links2} alt="link">{links2}</a></li>
                        </ul>
        </>
    )
}