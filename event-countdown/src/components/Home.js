import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faClock } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="welcome-title">Welcome to the Event Countdown App!</h1>
        <p className="welcome-text">
          Manage your events and track your countdowns effortlessly.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-lg border-light rounded">
            <div className="card-body text-center">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faCalendarPlus} /> Add Events
              </h5>
              <p className="card-text">
                Easily create and manage your events. Add new events and stay
                organized.
              </p>
              <Link to="/add-event" className="btn btn-primary btn-lg">
                Add Event
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-lg border-light rounded">
            <div className="card-body text-center">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faClock} /> View Countdowns
              </h5>
              <p className="card-text">
                Keep track of your upcoming events with countdown timers. Never
                miss an important date!
              </p>
              <Link to="/countdowns" className="btn btn-secondary btn-lg">
                View Countdowns
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-5">
        <div className="container text-center">
          <p className="footer-text">
            © 2024 Event Countdown App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
