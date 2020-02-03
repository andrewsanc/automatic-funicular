import React, { Component } from "react";
import "./App.css";
import CardList from "../CardList/CardList";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchTerm: ""
    };
  }

  onInputChange = searchTerm => {
    this.setState({ searchTerm: searchTerm });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const { users, searchTerm } = this.state;
    const filteredUsers = users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="app">
        <h1>Monsters Rolodex</h1>
        <SearchBar onInputChange={this.onInputChange} />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
