import events from "../data/events";

import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";
import Footer from "../components/Footer";

function Explore() {
  return (
    <>
      <Navbar />

      <div className="explore-container">
        <h1>Explore Events</h1>

        <SearchBar />

        <FilterTabs />

        <div className="events-grid">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              category={event.category}
              date={event.date}
              location={event.location}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Explore;