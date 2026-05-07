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

      <div style={{ padding: "20px" }}>
        <h1>Explore Events</h1>

        <SearchBar />

        <FilterTabs />

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

      <Footer />
    </>
  );
}

export default Explore;
