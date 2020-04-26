import React from 'react';
import Popup from '../components/popup'
import GallerySpesific from '../components/gallerySpecific'
import Back from "../components/back";
import data from '../data/projects.json'

export default ({ match: { params: { id } } }) => {
    const gaData = data[id - 1];
    return (
        <div className="col-sm-10">
            <div className="[ popupwrapper ]">
                <Popup header={gaData.id} />
                <div className="[ popupwrapper_content ]">
                    {
                        <div>
                            <GallerySpesific
                                img={`${gaData.img}`}
                                name={`${gaData.name}`}
                                desc={gaData.desc}
                                links1={`${gaData.links[0]}`}
                                links2={`${gaData.links[1]}`}
                                linkDescription1={gaData.linkDescription1}
                                linkDescription2={gaData.linkDescription2}
                            />
                        </div>
                    }
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                </div>
            </div>
        </div>
    );
}