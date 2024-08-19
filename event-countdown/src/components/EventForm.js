import React, { useState, useEffect } from "react";

const categories = ["Work", "Personal", "Family", "Others"];
const recurrenceOptions = ["None", "Daily", "Weekly", "Monthly", "Yearly"];

const EventForm = ({ addEvent, editEvent, eventToEdit }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [reminder, setReminder] = useState("");
  const [recurrence, setRecurrence] = useState("None");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (eventToEdit) {
      setName(eventToEdit.name);
      setDate(eventToEdit.date);
      setTime(eventToEdit.time);
      setCategory(eventToEdit.category);
      setReminder(eventToEdit.reminder || "");
      setRecurrence(eventToEdit.recurrence || "None");
      setIsEditing(true);
    }
  }, [eventToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = { name, date, time, category, reminder, recurrence };
    if (isEditing) {
      editEvent(eventData);
    } else {
      addEvent(eventData);
    }
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setDate("");
    setTime("");
    setCategory(categories[0]);
    setReminder("");
    setRecurrence("None");
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
      <div className="form-group">
        <label>Category</label>
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Reminder (minutes before event)</label>
        <input
          type="number"
          className="form-control"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          min="0"
        />
      </div>
      <div className="form-group">
        <label>Recurrence</label>
        <select
          className="form-control"
          value={recurrence}
          onChange={(e) => setRecurrence(e.target.value)}
        >
          {recurrenceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
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
