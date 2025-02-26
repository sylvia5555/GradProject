import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    comment: "Amazing experience! The artifacts were incredible, and the QR code feature was very useful.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    comment: "I loved how informative and interactive the museum was! Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Ali Hassan",
    comment: "The Egyptian Museum is truly a treasure trove of history. Great job on the digital guide!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 4,
    name: "Ali Hassan",
    comment: "The Egyptian Museum is truly a treasure trove of history. Great job on the digital guide!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    id: 5,
    name: "Ali Hassan",
    comment: "The Egyptian Museum is truly a treasure trove of history. Great job on the digital guide!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonials">
      <h2>What Visitors Say</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={review.image} alt={review.name} />
            <p className="comment">"{review.comment}"</p>
            <h4 className="head">{review.name}</h4>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
