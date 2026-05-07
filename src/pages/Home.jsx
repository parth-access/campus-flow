import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import events from "../data/events";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1>CampusFlow</h1>

        <p>Discover campus events easily</p>

        <button
          onClick={() => navigate("/explore")}
          style={{
            marginTop: "20px",
          }}
        >
          Explore Events
        </button>
      </div>

      <div
        style={{
          padding: "20px 40px",
        }}
      >
        <h2>Upcoming Events</h2>

        <div className="events-grid">
          {events.slice(0, 3).map((event) => (
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

export default Home;