import React, { useState } from "react";

const EventList = ({ events = [] }) => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);

  const safeEvents = Array.isArray(events) ? events : [];

  const filteredEvents = safeEvents
    .filter((event) => event.name.toLowerCase().includes(search.toLowerCase()))
    .filter((event) =>
      categoryFilter ? event.category === categoryFilter : true
    )
    .filter((event) => {
      const [startDate, endDate] = dateRange;
      if (!startDate || !endDate) return true;
      const eventDate = new Date(event.date);
      return eventDate >= new Date(startDate) && eventDate <= new Date(endDate);
    });

  return (
    <div className="container">
      <h2 className="my-4">Events</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search events"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-control my-2"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
        </select>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            value={dateRange[0] || ""}
            onChange={(e) => setDateRange([e.target.value, dateRange[1]])}
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            className="form-control"
            value={dateRange[1] || ""}
            onChange={(e) => setDateRange([dateRange[0], e.target.value])}
          />
        </div>
      </div>
      <ul className="list-group">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <li key={index} className="list-group-item">
              <h5>{event.name}</h5>
              <p>
                <strong>Category:</strong> {event.category}
              </p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {event.description || "No description provided"}
              </p>
              <button
                className="btn btn-info"
                data-toggle="modal"
                data-target={`#eventModal-${index}`}
              >
                View Details
              </button>
              <div
                className="modal fade"
                id={`eventModal-${index}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Event Details</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>
                        <strong>Name:</strong> {event.name}
                      </p>
                      <p>
                        <strong>Date:</strong> {event.date}
                      </p>
                      <p>
                        <strong>Category:</strong> {event.category}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {event.description || "No description provided"}
                      </p>
                      <p>
                        <strong>Location:</strong>{" "}
                        {event.location || "No location provided"}
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center">No events found</p>
        )}
      </ul>
    </div>
  );
};

export default EventList;
