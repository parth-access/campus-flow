import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Saved() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Saved Events</h1>

        <p>No saved events yet.</p>
      </div>

      <Footer />
    </>
  );
}

export default Saved;