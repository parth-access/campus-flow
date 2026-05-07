import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#1e1e2f",
        color: "white",
      }}
    >
      <h2>CampusFlow</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/explore">
          <button>Explore</button>
        </Link>

        <Link to="/saved">
          <button>Saved</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;