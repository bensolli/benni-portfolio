import React from 'react';
import Accordion from '../components/accordion'
import Popup from '../components/popup'
import Back from "../components/back";

//json imports
import Eductation from '../components/education'
import edData from '../data/education.json'

import Workexperiences from '../components/workexperiences'
import workData from "../data/work-experience.json"

import Voulentary from '../components/voulentary'
import volData from "../data/voulentary.json"

import Awards from '../components/awards'
import awData from "../data/awards.json"

import Refrences from '../components/refrences'
import refData from "../data/refrences.json"

export default () => {
    return (
        <div className="col-sm-10">
            <div className="[ popupwrapper ]">
                <Popup header='CV' />
                <div className="[ popupwrapper_content ]">
                    <Accordion>
                        {{
                            header: "Education",
                            body:
                                edData.map((value, index) => {
                                    return <Eductation key={index}
                                        name={value.name}
                                        date={value.date}
                                        desc={value.desc}
                                    />
                                })
                        }}
                        {{
                            header: "Work Experience",
                            body:

                                workData.map((value, index) => {
                                    return <Workexperiences key={index}
                                        name={value.name}
                                        date={value.date}
                                        desc={value.desc}
                                    />
                                })
                        }}
                        {{
                            header: "Voulentary work",
                            body:
                                volData.map((value, index) => {
                                    return <Voulentary key={index}
                                        name={value.name}
                                        date={value.date}
                                        desc={value.desc}
                                    />
                                })
                        }}
                        {{
                            header: "Awards",
                            body:
                                awData.map((value, index) => {
                                    return <Awards key={index}
                                        name={value.name}
                                        date={value.date}
                                        desc={value.desc}
                                    />
                                })
                        }}
                        {{
                            header: "Refrences",
                            body:
                                refData.map((value, index) => {
                                    return <Refrences key={index}
                                        name={value.name}
                                        desc={value.desc}
                                    />
                                })
                        }}
                    </Accordion>
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                </div>
            </div>

        </div>

    );
}

