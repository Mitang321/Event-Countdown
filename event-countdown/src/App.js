import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./styles/App.css";

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="App">
      <h1>Event Countdown</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} />
    </div>
  );
};

export default App;
