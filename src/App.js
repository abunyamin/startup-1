import React, { useEffect } from 'react';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Partner from './components/Partner';
import Content from './components/Content';
import Content2 from './components/Content2';
import Team from './components/Team';
import Footer from './components/Footer';
import Helmet from 'react-helmet'

export default function App() {

  useEffect(() => {

    const header = document.querySelector('header');

    const handleScroll = event => {
     if(document.documentElement.scrollTop > 100){
    header.setAttribute('style', 'position: fixed; left: 0; right: 0; z-index: 9999');
     } else {
      header.setAttribute('style', 'position: relative;');
     }
    };

    window.addEventListener('scroll', handleScroll);

  },[])

  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Work+Sans&display=swap" rel="stylesheet"/>
    <title>Startup</title>
      </Helmet>
      <Header />
      <Hero />
      <Partner />
      <Content />
      <Content2 />
      <Team />
      <Footer />
    </>
  );
}
