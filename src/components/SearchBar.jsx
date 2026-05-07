function SearchBar() {
  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Search events..."
        style={{
          padding: "10px",
          width: "300px",
        }}
      />
    </div>
  );
}

export default SearchBar;