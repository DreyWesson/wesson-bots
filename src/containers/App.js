import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorHandler from "../components/ErrorHandler";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="red">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">Wesson-bots</h1>
        <SearchBox onSearch={this.onSearchChange} />
        <br />
        <Scroll>
          <br />
          <ErrorHandler>
            <CardList robots={filteredRobots} />;
          </ErrorHandler>
        </Scroll>
      </div>
    );
  }
}

export default App;
