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

                    <div class="flex-div"> </div>
                    <div class="flex-div"><h1>Looks like you just entered Benni’s portfolio, would you like to continue?</h1></div>


                    
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                    <Link to="/Dashboard"><button className="[ popupwrapper_buttons-cta ][ buttons ]">Yes</button></Link>
                </div>
            </div>
        </div>
    );
}