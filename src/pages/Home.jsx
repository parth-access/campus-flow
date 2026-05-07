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
          padding: "80px 20px 40px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "10px",
          }}
        >
          CampusFlow
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#4b5563",
          }}
        >
          Discover campus events easily
        </p>

        <button
          onClick={() => navigate("/explore")}
          style={{
            marginTop: "30px",
            padding: "16px 32px",
            borderRadius: "30px",
            border: "none",
            backgroundColor: "#0d5c73",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Explore Events
        </button>
      </div>

      <div
        style={{
          padding: "60px 40px",
        }}
      >
        <h2
          style={{
            marginBottom: "30px",
          }}
        >
          Upcoming Events
        </h2>

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