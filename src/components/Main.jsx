import React from 'react'
import Hero from './Hero';
import Partner from './Partner';
import Content from './Content';
import Content2 from './Content2';
import Team from './Team';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Main = () => {
  return(<>
      <Hero />
      <Partner />
      <Content />
      <Content2 />
      <Team />
  </>)
}

export default Main; 