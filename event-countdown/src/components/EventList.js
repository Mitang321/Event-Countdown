import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";

const EventList = ({ events, deleteEvent, editEvent }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const [sortByDate, setSortByDate] = useState(true);

  const toggleCompletion = (index) => {
    const updatedEvents = [...events];
    updatedEvents[index].completed = !updatedEvents[index].completed;
    editEvent(updatedEvents[index], index);
  };

  const filteredEvents = events
    .filter((event) => {
      const matchesSearch = event.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || event.category === selectedCategory;
      const matchesDateRange =
        (!startDate || new Date(event.date) >= new Date(startDate)) &&
        (!endDate || new Date(event.date) <= new Date(endDate));
      const matchesCompletion = showCompleted || !event.completed;
      return (
        matchesSearch &&
        matchesCategory &&
        matchesDateRange &&
        matchesCompletion
      );
    })
    .sort((a, b) => (sortByDate ? new Date(a.date) - new Date(b.date) : 0));

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by event name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="form-control mt-2"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Family">Family</option>
          <option value="Others">Others</option>
        </select>
        <div className="d-flex mt-2">
          <input
            type="date"
            className="form-control mr-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          <label className="form-check-label">Show Completed Events</label>
        </div>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={sortByDate}
            onChange={() => setSortByDate(!sortByDate)}
          />
          <label className="form-check-label">Sort by Date</label>
        </div>
      </div>

      <div className="list-group">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              event.completed ? "completed" : ""
            }`}
            style={{
              backgroundColor:
                new Date(event.date).getTime() - Date.now() <
                  24 * 60 * 60 * 1000 && !event.completed
                  ? "#fff3cd"
                  : "",
            }}
          >
            <div>
              <h5>{event.name}</h5>
              <p className="mb-1">
                <strong>Category:</strong> {event.category}
              </p>
              <CountdownTimer eventDate={event.date} eventTime={event.time} />
            </div>
            <div>
              <button
                onClick={() => toggleCompletion(index)}
                className={`btn ${
                  event.completed ? "btn-secondary" : "btn-success"
                } mr-2`}
              >
                {event.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button
                onClick={() => editEvent(event, index)}
                className="btn btn-warning mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEvent(index)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <p className="text-center mt-3">No events found</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
