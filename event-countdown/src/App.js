import React, { useState, useEffect } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "./styles/App.css";

const categories = ["All", "Work", "Personal", "Family", "Others"];

const App = () => {
  const [events, setEvents] = useState([]);
  const [eventToEdit, setEventToEdit] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const editEvent = (updatedEvent) => {
    const updatedEvents = [...events];
    updatedEvents[editIndex] = updatedEvent;
    setEvents(updatedEvents);
    setEventToEdit(null);
    setEditIndex(null);
  };

  const startEditing = (event, index) => {
    setEventToEdit(event);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Event Countdown</h1>
      <EventForm
        addEvent={addEvent}
        editEvent={editEvent}
        eventToEdit={eventToEdit}
      />
      <div className="mb-4">
        <label>Filter by Category</label>
        <select
          className="form-control"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <EventList
        events={events}
        deleteEvent={deleteEvent}
        editEvent={startEditing}
        selectedCategory={selectedCategory === "All" ? null : selectedCategory}
      />
    </div>
  );
};

export default App;
