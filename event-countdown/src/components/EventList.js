import React from "react";
import CountdownTimer from "./CountdownTimer";

const calculateReminderTime = (eventDate, eventTime, reminder) => {
  const eventDateTime = new Date(`${eventDate}T${eventTime}`);
  const reminderDateTime = new Date(eventDateTime.getTime() - reminder * 60000);
  return reminderDateTime;
};

const EventList = ({ events, deleteEvent, editEvent }) => {
  const now = new Date();

  return (
    <div className="list-group">
      {events.map((event, index) => {
        const reminderDateTime = calculateReminderTime(
          event.date,
          event.time,
          event.reminder
        );
        const showReminder =
          now >= reminderDateTime &&
          now < new Date(event.date + "T" + event.time);
        return (
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
              {showReminder && (
                <div className="alert alert-warning mt-2">
                  Reminder: Event is approaching!
                </div>
              )}
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
        );
      })}
    </div>
  );
};

export default EventList;
