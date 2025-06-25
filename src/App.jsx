// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import HeroSection from './Components/HeroSection';
import Home from './Components/Home';
import Footer from './Components/Footer';




function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Home />
      <Footer />
      
    </div>
  );
}

export default App;