import React from "react";
import "./Contact.css";
import contactImage from "../../Assets/gallery/ev6.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-image fade-in-left">
        <img src={contactImage} alt="Contact Us" />
      </div>
      <div className="contact-form">
        <h2 className="head">Contact Us</h2>
        <p>We’d love to hear from you! Reach out to us via the form below.</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>
            <FaMapMarkerAlt className="icon" /> 123 Museum Street, Cairo, Egypt
          </p>
          <p>
            <FaEnvelope className="icon" /> info@museum.com
          </p>
          <p>
            <FaPhone className="icon" /> +20 123 456 789
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
