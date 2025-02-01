import { useState, useEffect } from 'react';
import './App.css';
import audioFile from "./Assets/MUsic.mp3";
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import RegisterGuest from "./components/Register/Registerg";
import CreateAccount from "./components/Register/CreateAccount";
import Home from './components/Home';
import Events from './components/Events/Events';
import EventDetail from './components/Events/EventDetail';
import About from './components/About/About';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio(audioFile);

  const playSound = () => {
    audio.play().catch((error) => {
      console.error("خطأ في تشغيل الصوت:", error);
    });
    setIsPlaying(true);
  };

  useEffect(() => {
    // إضافة مستمع لحدث النقر (click) في الصفحة
    const handleClick = () => {
      if (!isPlaying) {
        playSound();  // تشغيل الصوت بعد النقر
      }
    };

    // إضافة مستمع لحدث النقر في الجسم
    document.body.addEventListener('click', handleClick);

    // تنظيف الحدث عند مغادرة المكون
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [isPlaying]);

  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/Guest" element={<RegisterGuest />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/event/:id" element={<EventDetail />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
