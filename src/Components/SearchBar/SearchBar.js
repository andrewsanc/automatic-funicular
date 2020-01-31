import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ""
    };
  }
  render() {
    return (
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search for a Monster/Robot"
          onChange={e => console.log(e.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
