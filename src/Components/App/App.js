import React, { Component } from "react";
import "./App.css";
import CardList from "../CardList/CardList";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="app">
        <SearchBar />
        <CardList users={users} />
      </div>
    );
  }
}

export default App;
