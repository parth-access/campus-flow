function FilterTabs({ setCategory }) {
  return (
    <div style={{ margin: "20px" }}>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => setCategory("All")}
      >
        All
      </button>

      <button
        style={{ marginRight: "10px" }}
        onClick={() => setCategory("Coding")}
      >
        Coding
      </button>

      <button
        style={{ marginRight: "10px" }}
        onClick={() => setCategory("Design")}
      >
        Design
      </button>

      <button
        style={{ marginRight: "10px" }}
        onClick={() => setCategory("Sports")}
      >
        Sports
      </button>

      <button onClick={() => setCategory("Fest")}>
        Fest
      </button>
    </div>
  );
}

export default FilterTabs;