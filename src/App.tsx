import React from 'react';
import logo from './logo.svg';
import './App.css';
import './animation.css';
import Header from "./components/Header/Header"
import HeaderBox from './components/HeaderBox/HeaderBox';
import SecondSection from './components/SecondSection/SecondSection';

function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <Header />
        <HeaderBox />
      </div>
      
      <SecondSection />
    </div>
  );
}

export default App;
