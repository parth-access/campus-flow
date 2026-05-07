function EventCard(props) {
  return (
    <div className="event-card">
      <div className="card-top">
        <span className="category">{props.category}</span>
      </div>

      <h2>{props.title}</h2>

      <p>📅 {props.date}</p>

      <p>📍 {props.location}</p>
    </div>
  );
}

export default EventCard;