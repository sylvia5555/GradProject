import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Header.css";

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    toggleLanguage(e.target.value);
  };

  return (
    <header className="header">
      <div className="logo">
        {language === "en" ? "Egyptian Museum" : "المتحف المصري"}
      </div>
      <nav className="nav-links">
        <a href="/">{language === "en" ? "Home" : "الرئيسية"}</a>
        <a href="/about">{language === "en" ? "About" : "عن المتحف"}</a>
        <a href="#gallery">{language === "en" ? "Gallery" : "المعرض"}</a>
        <a href="#contact">{language === "en" ? "Contact" : "تواصل معنا"}</a>
        <a href="/Events">{language === "en" ? "Events" : "المناسبات"}</a>
      </nav>
      <div className="header-right">
        <select
          className="language-select"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
        <div className="toggle-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
