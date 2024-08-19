import React from "react";
import { Modal, Button } from "react-bootstrap";

const EventDetailsModal = ({ event, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{event.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>Category:</strong> {event.category}
        </p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Time:</strong> {event.time}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {event.description || "No description available."}
        </p>
        <p>
          <strong>Location:</strong> {event.location || "No location provided."}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventDetailsModal;
