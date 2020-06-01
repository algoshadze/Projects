import React from 'react';
import Navbar from './components/menu/Navbar'
import Header from './components/header/Header'
import SocLinks from './components/SocLinks/SocLinks'
import Routes from "./components/Routes/routes";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Background from './background-image.jpg'



function App() {
  return (
    <div className="App" style={{backgroundImage:"url("+Background+")"}}>
      <Header />
       <Router>
        <Navbar />
        <Routes />
       </Router>
      <SocLinks />
    </div>
  );
}

export default App;
