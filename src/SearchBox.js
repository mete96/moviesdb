import React from "react";

function SearchBox({ value, setSearch }) {
  return (
    <div className="ara">
      <input
        className="forma"
        value={value}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a movie..."
      />
    </div>
  );
}

export default SearchBox;
