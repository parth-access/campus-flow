import { useState } from "react";

import events from "../data/events";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import FilterTabs from "../components/FilterTabs";

function Explore() {
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
        }}
      >
        <h1>Explore Events</h1>

        <SearchBar search={search} setSearch={setSearch} />

        <FilterTabs />

        <div className="events-grid">
          {filteredEvents.map((event) => (
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