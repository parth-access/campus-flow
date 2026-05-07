function SearchBar(props) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>Search Events</h3>

      <input
        type="text"
        placeholder="Search events..."
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "300px",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default SearchBar;