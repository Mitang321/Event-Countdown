import React from "react";
import CountdownTimer from "./CountdownTimer";

const EventList = ({ events }) => {
  return (
    <div>
      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.name}</h3>
          <CountdownTimer eventDate={event.date} eventTime={event.time} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
