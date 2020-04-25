import React from 'react';
import { Link } from 'react-router-dom';

export default ({header}) => {
    return (
        <>
                <div className="[ popupwrapper_header ]">
                    <div className="[ popupwrapper_header_btn ]">
                    <Link to="/Desktop"><button className="[ popupwrapper_header_btn-1 ]"></button></Link>
                        
                        <button className="[ popupwrapper_header_btn-darkmode ]"></button>
                    </div>
                    <div className="[ popupwrapper_header_title ]"><h1>{header}</h1></div>
                </div>
        </>
    )
}
