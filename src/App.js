import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import HowItworks from './pages/HowItworks';
import CallRates from './pages/CallRates';







function App() {
  return (
    <>
   
    <Router>
       <Header />
      
      <Routes>
        <Route element={<Home/>}exact path='/Home' />
        <Route element={<HowItworks/>}exact path='/HowItworks' />
        <Route element={<CallRates/>}exact path='/CallRates' />
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
