import React, { useState } from 'react';
import Popup from '../components/popup'
import Gallery from '../components/gallery'
import Back from "../components/back";
import data from '../data/projects.json'

export default ({ match: { params: { id } } }) => {

    const [posts, setPosts] = useState(id - 1);
    const nextSlide = () => {
        (posts !== data.length - 1) ? setPosts(posts + 1) : setPosts(0);
    }
    const previousSlide = () => {
        (posts !== 0) ? setPosts(posts - 1) : setPosts(data.length - 1);
    }
    return (
        <div className="col-sm-10">
            <div className="[ popupwrapper ]">
                <Popup header={`${data[posts].name} ${data[posts].id}/${data.length}`} />
                <div className="[ popupwrapper_content ]">
                    {
                        <div>
                            <Gallery
                                img={`${data[posts].img}`}
                                name={`${data[posts].name}`}
                                desc={data[posts].desc}
                                links1={`${data[posts].links[0]}`}
                                links2={`${data[posts].links[1]}`}
                                linkDescription1={data[posts].linkDescription1}
                                linkDescription2={data[posts].linkDescription2}
                                //iframeURL={data[posts].iframeURL}
                            />
                        </div>
                    }
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                    <button onClick={previousSlide} className="[ popupwrapper_buttons-cta ][ buttons ]"><span className="[ glyphicon glyphicon-chevron-left ]"></span></button>
                    <button onClick={nextSlide} className="[ popupwrapper_buttons-cta ][ buttons ]"><span className="[ glyphicon glyphicon-chevron-right ]"></span></button>
                </div>
            </div>
        </div>
    );
}