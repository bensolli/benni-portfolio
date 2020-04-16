import React, { useState } from 'react';
import 'bootstrap3/dist/css/bootstrap.min.css';
import './scss/styles.scss'
import Navigation from './components/navigation';
import Footer from './components/footer';

export default (props) => {

  return (
    <div className="container">
      <Navigation />
      {props.children}
      <Footer />
    </div>
  )
}
