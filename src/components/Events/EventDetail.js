import React from "react";
import { useParams } from "react-router-dom"; // لاستخراج المعرف من الرابط
import EventsData from "./EventsData";
import "./Events.css";
import eventv from "../Events/event.mp4"
const EventDetail = () => {
  const { id } = useParams(); // استخراج ID الحدث من الرابط
  const event = EventsData.find(event => event.id === parseInt(id)); // العثور على الحدث بناءً على الـ ID

  return (
    <>
    <div className="event-detail" style={{overflow:"hidden"}}>
      {event ? (
        <div style={{paddingLeft:"30px"}}>
          <h2 className="event-title text-center head" style={{margin:"40px auto"}}>{event.title}</h2>
          <img src={event.image} alt={event.title} className="event-image"  style={{width: "500px", height: "300px", borderRadius: "13px",margin: "20px auto"}}/>
        </div>
      ) : (
        <p>الحدث غير موجود.</p>
      )}

      <div className="pvideo">
<div className="disc">
<p className="event-description text-left">{event.desc}</p>
<p className="event-description ">{event.sidepara}</p>
</div>
      </div>
    </div>
      </>
  );

};

export default EventDetail;
