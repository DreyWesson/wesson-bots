import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorHandler from "../components/ErrorHandler";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">Wesson-bots</h1>
        <SearchBox onSearch={onSearchChange} />
        <br />
        <Scroll>
          <br />
          <ErrorHandler>
            <CardList robots={filteredRobots} />;
          </ErrorHandler>
        </Scroll>
        <br />
        <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black">
          Add Robot
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
