import React, { createContext, useState } from "react";

// إنشاء الـ Context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // اللغة الافتراضية: إنجليزي

  // تغيير اللغة
  const toggleLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; // تغيير الاتجاه
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
