import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 className="my-4">Event Countdown</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link to="/add-event" className="btn btn-primary">
          Add Event
        </Link>
        <Link to="/countdowns" className="btn btn-secondary">
          View Countdowns
        </Link>
      </div>
    </div>
  );
};

export default Home;
