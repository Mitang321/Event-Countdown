import React, { useState } from "react";
import EventForm from "./EventForm";

const ParentComponent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const saveEvent = (event) => {
    console.log("Event saved:", event);
    setIsEditing(false);
  };

  const handleEdit = (event) => {
    setEventToEdit(event);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing && (
        <EventForm
          eventToEdit={eventToEdit}
          saveEvent={saveEvent}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};

export default ParentComponent;
