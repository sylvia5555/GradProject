import React from "react";
import { useParams } from "react-router-dom";
import TicketsData from "./TickestData";
import "./Ticket.css";

const TicketDetails = () => {
  const { id } = useParams();
  const ticket = TicketsData.find((ticket) => ticket.id === parseInt(id)); // العثور على الحدث بناءً على الـ ID

  return (
    <div className="ticket-detail">
      {ticket ? (
        <>
          <h2 className="ticket-title">{ticket.title}</h2>
          <img src={ticket.image} alt={ticket.title} className="ticket-image" />
          <div className="ticket-section">
            <h3>Description:</h3>
            <ul>
              {ticket.desc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="ticket-section">
            <h3>Information:</h3>
            <ul>
              {ticket.info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="ticket-section">
            <h3>Prices:</h3>
            <p>Children: {ticket.prices.children}</p>
            <p>Egyptians: {ticket.prices.Egyptians}</p>
            <p>Foreigners: {ticket.prices.foreign}</p>
          </div>
        </>
      ) : (
        <p>The ticket is not exist</p>
      )}
    </div>
  );
};

export default TicketDetails;
