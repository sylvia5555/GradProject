import React, { useEffect } from "react";
import "./about.css";
import museumImage from "../../Assets/gallery/ev6.jpg";
import AOS from "aos"; // مكتبة الأنيميشن
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // تهيئة مكتبة AOS
  }, []);

  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="about-header">
        <h1 data-aos="fade-down" className="head">About The Egyptian Museum</h1>
        <p data-aos="fade-up">
          Preserving Egypt's rich cultural heritage since 1902
        </p>
      </header>

      {/* History Section */}
      <section className="about-history">
        <div className="history-content" data-aos="fade-right">
          <h2 className="head">History of The Museum</h2>
          <p>
            The Egyptian Museum, located in Cairo, is home to the world's
            largest collection of pharaonic antiquities. Opened in 1902, it has
            been a cornerstone in preserving the history and legacy of ancient
            Egypt, showcasing treasures from Tutankhamun to the golden age of
            the pharaohs.
          </p>
        </div>
        <div className="history-image" data-aos="fade-left">
          <img src={museumImage} alt="Egyptian Museum" />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="about-mission-vision" data-aos="zoom-in">
        <h2 className="head">Our Mission and Vision</h2>
        <p>
          Our mission is to inspire and educate people around the world about
          Egypt’s incredible history by preserving its artifacts and sharing
          their stories. Our vision is to become a global leader in cultural
          preservation and historical education.
        </p>
      </section>

      {/* Key Exhibits Section */}
      <section className="about-exhibits" data-aos="fade-up">
        <h2 className="head">Key Exhibits</h2>
        <ul>
          <li>The Golden Mask of Tutankhamun</li>
          <li>Ancient Egyptian Mummies</li>
          <li>The Rosetta Stone</li>
          <li>Pharaoh Statues and Sculptures</li>
        </ul>
      </section>

      {/* Contact and Location Section */}
      <section className="about-contact" data-aos="fade-up">
        <h2 className="head">Visit Us</h2>
        <p>
          The Egyptian Museum is located in the heart of Cairo, just minutes
          away from Tahrir Square. We welcome visitors daily from 9:00 AM to
          7:00 PM.
        </p>
        <div className="map-container">
          <iframe
            title="Egyptian Museum Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.3824382918394!2d31.233639875350475!3d30.047793127926845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c05b7504fd%3A0xb7d7c1d164007e1b!2sThe%20Egyptian%20Museum!5e0!3m2!1sen!2seg!4v1675883150421!5m2!1sen!2seg"
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
