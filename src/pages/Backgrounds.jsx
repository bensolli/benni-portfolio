import React, { useState } from 'react';
import BackgroundImages from "../components/background-images";
import data from '../data/backgrounds.json'
import { BackgroundContext } from '../App.js'
import Popup from '../components/popup'
import Back from "../components/back";

export default () => {
    const [radioState, setRadioState] = useState('../images/natural.png');
    console.log(radioState);
    
    const changeBackground = (callback) => {
        localStorage.setItem('Background Images', callback);
    }

    return (
        <>
            <div className="col-sm-10">
                <div className="[ popupwrapper ]">
                    <Popup
                        header='Backgrounds'
                    />
                    <div className="[ popupwrapper_content ]">
                        <BackgroundContext.Consumer>
                            {
                                (context) =>
                                    data.map((value, index) => {
                                        return <BackgroundImages key={index}
                                            id={value.id}
                                            img={value.background}
                                            onclicked={() => { setRadioState(`${value.background}`); changeBackground(`${value.background}`); context.triggerLocalStorageHasChanged() }}
                                            ifChecked={(radioState !== `${value.background}`) ? false : true}
                                            change={() => { console.log(context) }}
                                        />
                                    })
                            }
                        </BackgroundContext.Consumer>
                    </div>
                    <div className="[ popupwrapper_buttons ]">
                    <Back />
                    </div>
                </div>
            </div>
        </>
    );
}