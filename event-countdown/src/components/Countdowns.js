import React from "react";

const Countdowns = ({ events = [] }) => {
  const safeEvents = Array.isArray(events) ? events : [];
  const upcomingEvents = safeEvents.filter(
    (event) => new Date(event.date) > new Date()
  );

  return (
    <div className="container">
      <h2 className="my-4">Upcoming Countdowns</h2>
      {upcomingEvents.length > 0 ? (
        <ul className="list-group">
          {upcomingEvents.map((event, index) => (
            <li key={index} className="list-group-item">
              <h5>{event.name}</h5>
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
                data-target={`#countdownModal-${index}`}
              >
                View Details
              </button>

              {/* Modal */}
              <div
                className="modal fade"
                id={`countdownModal-${index}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby={`countdownModalLabel-${index}`}
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id={`countdownModalLabel-${index}`}
                      >
                        Countdown Details
                      </h5>
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
          ))}
        </ul>
      ) : (
        <p className="text-center">No upcoming events</p>
      )}
    </div>
  );
};

export default Countdowns;
