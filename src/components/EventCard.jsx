function EventCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2>{props.title}</h2>

      <p>Category: {props.category}</p>

      <p>Date: {props.date}</p>

      <p>Location: {props.location}</p>
    </div>
  );
}

export default EventCard;