import { useState, useEffect } from 'react';
import './App.css';
import audioFile from "./Assets/MUsic.mp3";
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './components/Home';
import Events from './components/Events/Events';
import EventDetail from './components/Events/EventDetail';
import About from './components/About/About';
import Login from './components/Register/Login';
import Sections from "./components/Sections/Sections";
import SectionDetails from "./components/Sections/SectionDetails";
import Contact from "./components/contacts/Contact"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  

  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/sections" element={<Sections />} />
        <Route path="/sections/:id" element={<SectionDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
