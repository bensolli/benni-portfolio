import React, { useState, createContext } from 'react';
import 'bootstrap3/dist/css/bootstrap.min.css';
import './scss/styles.scss'
import Navigation from './components/navigation';


export const BackgroundContext = createContext();


export default (props) => {
  const [background, setBackground] = useState(localStorage.getItem('Background Images'));
  
  const context = {
    triggerLocalStorageHasChanged: () => {
      setBackground(localStorage.getItem('Background Images'));
    }
  }

  return (
    <BackgroundContext.Provider value={context}>
      <div className="container">
        <img src={background} className="[ background-image ]" alt="backgroundImage"/>
            <div className="row">
              {props.children}
            </div>
      </div>
      <Navigation />
      </BackgroundContext.Provider>
  )
}


