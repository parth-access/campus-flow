import { saveEvent } from "../utils/storage";

function EventCard(props) {
  function handleSave() {
    saveEvent(props);

    alert("Event Saved");
  }

  return (
    <div className="event-card">
      <div className="card-top">
        <span className="category">{props.category}</span>
      </div>

      <h2>{props.title}</h2>

      <p>📅 {props.date}</p>

      <p>📍 {props.location}</p>

      <button
        onClick={handleSave}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          backgroundColor: "#0d5c73",
          color: "white",
          cursor: "pointer",
        }}
      >
        Save Event
      </button>
    </div>
  );
}

export default EventCard;