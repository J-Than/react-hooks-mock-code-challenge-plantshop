import React from "react";

function Search({ onSearch, currentSearch }) {

  function handleChange(e) {
    onSearch(e.target.value);
    console.log(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={currentSearch}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
