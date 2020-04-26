import React from 'react';
import Popup from '../components/popup'
import { Link } from 'react-router-dom';
import Back from "../components/back";

export default () => {
    return (
        <div className="col-sm-12">
            <div className="[ popupwrapper ]">
                <Popup header='What would you like to do?' />
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                    <Link to="/Gallery"><button className="[ popupwrapper_buttons-cta ][ buttons ]">Look at Gallery</button></Link>
                    <Link to="/Bio"><button className="[ popupwrapper_buttons-cta ][ buttons ]">Look at Bio</button></Link>
                    <Link to="/Contact"><button className="[ popupwrapper_buttons-cta ][ buttons ]">Contact Benni</button></Link>
                </div>
            </div>
        </div>
    );
}