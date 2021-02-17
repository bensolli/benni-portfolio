import React, { useState } from 'react';
import Popup from '../components/popup'
import GalleryOverview from '../components/galleryOverview'
import Back from "../components/back";

import work from '../data/projects.json'

export default () => {
    const [characters] = useState(work);
    const [characterResults, setCharacterResults] = useState([]);
    const [isResultsFiltered, setIsResultsFiltered] = useState(false);
    const [SearchPhrase, setSearchPhrase] = useState('');
    const handleFiltering = (input) => {
        let filteredcharacters = characters.filter((value) => {
            return value.name.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setCharacterResults(filteredcharacters);
        setSearchPhrase(input.target.value);
        setIsResultsFiltered(true);
    }

    return (

        <div className="col-sm-10">
            <div className="[ popupwrapper ]">
                <Popup header='My work' />

                <div className="[ popupwrapper_searchbar ]">
                    <form>
                        <input type='text' name='s' placeholder='Search' onChange={handleFiltering} className='[ popupwrapper_searchbar_form ]' />
                    </form>
                </div>

                <div className="[ popupwrapper_content ]">


                    {
                        (isResultsFiltered) ?
                            <div>
                                <div className="[ col-sm-12 ]">
                                    <h2>Filtered Results for {SearchPhrase}</h2>
                                </div>
                                {
                                    (characterResults.length > 0) ?
                                        characterResults.map((value, index) => {
                                                return <GalleryOverview key={index}
                                                name={value.name}
                                                img={`${value.img}`}
                                                id={value.id}
                                            />



                                            }) : <div className="[ col-sm-12 ]">No results yet</div>
                                }
                            </div> :
                            <>
                                {characters !== undefined ? (
                                    characters.map((value, index) => {
                                            return (<GalleryOverview key={index}
                                                name={value.name}
                                                img={`${value.img}`}
                                                id={value.id}
                                            />
                                            );
                                        })) : (<div className="[ col-sm-12 ]">No results yet</div>)}
                            </>
                    }
                </div>
                <div className="[ popupwrapper_buttons ]">
                    <Back />
                </div>
            </div>
        </div>
    );
}