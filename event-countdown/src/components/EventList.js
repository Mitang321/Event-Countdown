import React from "react";
import CountdownTimer from "./CountdownTimer";

const EventList = ({ events, deleteEvent, editEvent }) => {
  return (
    <div className="list-group">
      {events.map((event, index) => (
        <div
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <h5>{event.name}</h5>
            <CountdownTimer eventDate={event.date} eventTime={event.time} />
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
    </div>
  );
};

export default EventList;
