import events from "../data/events";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Explore() {
  return (
    <div>
      <Navbar />

      <h1>Explore Events</h1>

      <SearchBar />

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