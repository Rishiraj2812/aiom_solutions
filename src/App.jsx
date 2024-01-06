import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import First from './components/First';
import img from '../bg.jpg'
import VirtualAssistant from './components/VirtualAssistant';

import styled from 'styled-components';
import Header from './components/Header';
import Listing from './components/Listing';
import ServiceOffer from './components/ServiceOffer';
import Start from './components/Start';
import Safe from './components/Safe'
import Payment from './components/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const StyledText = styled.div`
  font-family: 'Roboto', sans-serif;
`;


function App() {
  return (

    
    <StyledText>

    {/* <Header/> */}
    <First/>
    <VirtualAssistant/>
    <ServiceOffer/>
    <Start/>
    <Listing/>
    <Safe/>
    <Payment/>
    

    
  
    </StyledText>
  );
}

export default App;
