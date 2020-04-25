import React from 'react';
import Popup from '../components/popup'
import Bio from '../components/bio'
import BioDesc from '../components/bio-desc'
import { Link } from 'react-router-dom';
import Back from "../components/back";
import bioData from "../data/bio.json"

export default () => {
    return (
        <div className="col-sm-10">
            <div className="[ popupwrapper ]">
                <Popup
                    header='BIO'
                />
                <div className="[ popupwrapper_content ]">
                    <Bio
                        name={bioData[0].name}
                        title={bioData[0].title}
                        subtitle={bioData[0].subtitle}
                        ingress={bioData[0].ingress}
                    />
                    {
                        bioData[0].desc.map((value, index) => {
                            return <BioDesc key={index}
                                desc={value}
                            />
                        })
                    }
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                    <Link to="/About"><button className="[ popupwrapper_buttons-cta ][ buttons ]">CV</button></Link>
                </div>
            </div>
        </div>
    );
}