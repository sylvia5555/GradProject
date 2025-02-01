import React from "react";
import { useParams } from "react-router-dom"; // لاستخراج المعرف من الرابط
import EventsData from "./EventsData";
import "./Events.css";

const EventDetail = () => {
  const { id } = useParams(); // استخراج ID الحدث من الرابط
  const event = EventsData.find(event => event.id === parseInt(id)); // العثور على الحدث بناءً على الـ ID

  return (
    <div className="event-detail">
      {event ? (
        <>
          <h2 className="event-title">{event.title}</h2>
          <img src={event.image} alt={event.title} className="event-image" />
          <p className="event-description">{event.desc}</p>
          <p className="event-location">المكان: {event.location}</p>
        </>
      ) : (
        <p>الحدث غير موجود.</p>
      )}
    </div>
  );
};

export default EventDetail;
