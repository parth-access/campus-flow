import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";

import { getSavedEvents } from "../utils/storage";

function Saved() {
  const savedEvents = getSavedEvents();

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
        }}
      >
        <h1>Saved Events</h1>

        {savedEvents.length === 0 ? (
          <p>No saved events yet.</p>
        ) : (
          <div className="events-grid">
            {savedEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                category={event.category}
                date={event.date}
                location={event.location}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Saved;