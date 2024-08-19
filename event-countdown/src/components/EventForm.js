import React, { useState, useEffect } from "react";

const EventForm = ({ addEvent, editEvent, eventToEdit }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (eventToEdit) {
      setName(eventToEdit.name);
      setDate(eventToEdit.date);
      setTime(eventToEdit.time);
      setIsEditing(true);
    }
  }, [eventToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editEvent({ name, date, time });
    } else {
      addEvent({ name, date, time });
    }
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setDate("");
    setTime("");
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Event Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        {isEditing ? "Update Event" : "Add Event"}
      </button>
      {isEditing && (
        <button
          type="button"
          className="btn btn-secondary mt-3 ml-2"
          onClick={clearForm}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default EventForm;
