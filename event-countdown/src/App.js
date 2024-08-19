import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import Countdowns from "./components/Countdowns";

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (eventData) => {
    setEvents([...events, eventData]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-event" element={<EventForm addEvent={addEvent} />} />
        <Route path="/events" element={<EventList events={events} />} />
        <Route path="/countdowns" element={<Countdowns events={events} />} />
      </Routes>
    </Router>
  );
};

export default App;
