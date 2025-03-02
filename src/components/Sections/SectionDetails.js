import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Sdata from "./sectionsData"; 
import "./Sections.css"; 

const SectionDetails = () => {
  const { id } = useParams();
  const section = Sdata.find((item) => item.id === parseInt(id));

  if (!section) {
    return <h2 className="error">Section not found!</h2>;
  }

  // إعدادات السلايدر
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // ✅ إلغاء الأزرار
  };

  return (
    <div div style={{backgroundImage:"url(../../Assets/gallery/wooden-floor-background.jpg)", backgroundSize:"cover"}}>
    <div className="section-details">

      <div className="slider-container">
      <h2 className="title">{section.title}</h2>
        <Slider {...settings}>
          {section.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={section.title} className="slider-image" />
            </div>
          ))}
        </Slider>
      {/* ✅ فقرة الوصف خارج السلايدر مباشرة */}
      <p className="description">{section.description}</p>
      </div>
      {/* ✅ فقرتين إضافيتين تحت السلايدر مباشرة */}
      <div className="extra-content">
      <p> The Egyptian Museum is one of the most important museums in the world, housing the largest collection of ancient Egyptian artifacts.
         Every year, millions of tourists from around the world visit to witness the treasures that tell the rich history of Egypt.
          The museum is distinguished by its display of rare statues, mummies, and unique Pharaonic jewelry. </p>
           <p> Inside the museum, visitors can explore the details of ancient Egyptian civilization through remarkable artifacts that reflect the development of arts, engineering, and sciences during the Pharaonic era. 
        The museum holds more than 120,000 artifacts and serves as a vital center for archaeological studies and research. </p>
      </div>
    </div>
    </div>
  );
};

export default SectionDetails;
