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

      <div>
        <button>Home</button>

        <button>Explore</button>

        <button>Saved</button>
      </div>
    </nav>
  );
}

export default Navbar;