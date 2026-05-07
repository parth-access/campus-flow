import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1>CampusFlow</h1>

        <p>Discover campus events easily</p>

        <button>Explore Events</button>
      </div>

      <Footer />
    </>
  );
}

export default Home;