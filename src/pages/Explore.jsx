import events from "../data/events";
import EventCard from "../components/EventCard";

function Explore() {
  return (
    <div>
      <h1>Explore Events</h1>

      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          category={event.category}
          date={event.date}
          time={event.time}
          location={event.location}
        />
      ))}
    </div>
  );
}

export default Explore;