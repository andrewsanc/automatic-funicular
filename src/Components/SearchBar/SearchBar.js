import React from "react";
import "./SearchBar.css";

const SearchBar = ({ onInputChange }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for a Monster/Robot"
        onChange={e => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
