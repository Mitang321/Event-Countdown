import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import EventDetailsModal from "./EventDetailsModal";

const EventList = ({ events, deleteEvent, editEvent }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;
    const matchesDateRange =
      (!startDate || new Date(event.date) >= new Date(startDate)) &&
      (!endDate || new Date(event.date) <= new Date(endDate));
    return matchesSearch && matchesCategory && matchesDateRange;
  });

  const handleShowModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

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
      </div>

      <div className="list-group">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{event.name}</h5>
              <p className="mb-1">
                <strong>Category:</strong> {event.category}
              </p>
              <CountdownTimer eventDate={event.date} eventTime={event.time} />
              <button
                onClick={() => handleShowModal(event)}
                className="btn btn-info mt-2"
              >
                View Details
              </button>
            </div>
            <div>
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

      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          show={showModal}
          handleClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default EventList;
