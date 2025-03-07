import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TicketsData from "./Ticketsdata.js";
import "./Ticket.css";
// import TicketDetails from "./Ticketdetails";

const Ticket = () => {
  return (
    <>
      <div className="ticket-heading">
        <p>PLAN YOUR VISIT</p>
        <h1>Buy A Ticket</h1>
      </div>
      <div className="ticket-container">
        <h2>
          Take A Look At the <span>OFFERS!</span>
        </h2>
        <div className="cards">
          <div className="ticket-card" id="ticket-card1">
            {TicketsData.map((ticket) => (
              <motion.div
                key={ticket.id}
                className="ticket-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={ticket.banner} alt="briefTours" />
                <h3>{ticket.title}</h3>
                <p>EGP 100 ~ 600</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="ticket-details">
          <div className="details-content">
            <h2>More Information..</h2>
            <p>Daily except Saturdays and Wednesdays</p>
            <ul>
              <li>GEM Complex: 8:30 AM – 7 PM</li>
              <li>Galleries: 9 AM – 6 PM</li>
              <li>Last ticket purchase: 5 PM</li>
            </ul>
            <p>Saturday and Wednesday</p>
            <ul>
              <li>GEM Complex: 8:30 AM – 10 PM</li>
              <li>Galleries: 9 AM – 9 PM</li>
              <li>Last ticket purchase: 8 PM</li>
            </ul>
            <p>Ramadan Hours (March 1 - 29)</p>
            <ul>
              <li>GEM Complex: Daily from 8:30 AM to 5 PM</li>
              <li>Galleries: Daily from 9 AM to 4 PM</li>
              <li>Last ticket purchase: 3 PM</li>
            </ul>
          </div>
          <div className="details-img"></div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
