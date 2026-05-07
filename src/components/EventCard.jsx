function EventCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
    >
      <h2>{props.title}</h2>

      <p>
        <strong>Category:</strong> {props.category}
      </p>

      <p>
        <strong>Date:</strong> {props.date}
      </p>

      <p>
        <strong>Time:</strong> {props.time}
      </p>

      <p>
        <strong>Location:</strong> {props.location}
      </p>
    </div>
  );
}

export default EventCard;