import React from 'react';
import Popup from '../components/popup'
import { Link } from 'react-router-dom';
import Back from "../components/back";

export default () => {
    return (
        <div className="col-sm-10">
            <div className="[ popupwrapper ]">
                <Popup header='ALERT!' />
                <div className="[ popupwrapper_content ]">
                    <h2>Looks like you just entered Benni’s portfolio, would you like to continue?</h2>
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                    <Link to="/Dashboard"><button className="[ popupwrapper_buttons-cta ][ buttons ]">Yes</button></Link>
                </div>
            </div>
        </div>
    );
}