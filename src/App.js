import React, { useEffect } from 'react';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import Porto from './components/Porto';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Helmet from 'react-helmet'
import {
  Routes,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {

  useEffect(() => {

    const header = document.querySelector('header');

    if(header){
    const handleScroll = event => {
     if(document.documentElement.scrollTop > 100){
    header.setAttribute('style', 'position: fixed; left: 0; right: 0; top: 0; z-index: 9999');
     } else {
      header.setAttribute('style', 'position: relative;');
     }
    };

    window.addEventListener('scroll', handleScroll);
  }

  },[])

  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Work+Sans&display=swap" rel="stylesheet"/>
    <title>Startup</title>
      </Helmet>
      
      <Header />
      <Routes>
    
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<Porto />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer />
    </>
  );
}
