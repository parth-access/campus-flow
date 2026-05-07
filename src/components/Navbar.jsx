import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#1b1b35",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          margin: "0",
        }}
      >
        CampusFlow
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => navigate("/")}>Home</button>

        <button onClick={() => navigate("/explore")}>
          Explore
        </button>

        <button onClick={() => navigate("/saved")}>
          Saved
        </button>
      </div>
    </nav>
  );
}

export default Navbar;