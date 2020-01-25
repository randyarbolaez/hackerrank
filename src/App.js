import React, { Component } from "react";
import Age from "./components/Age";
import Name from "./components/Name";
import Points from "./components/Points";
import Rank from "./components/Rank";
import Table from "./components/Table";
import { usersJSON } from "./data";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      sortBy: "",
      data: usersJSON
    };
  }

  handleClickAge = () => {
    this.setState(() => ({
      data: usersJSON.sort((a, b) => {
        return a.age - b.age;
      })
    }));
  };

  handleClickName = () => {
    this.setState(() => ({
      data: usersJSON.sort((a, b) => {
        // names to have same format
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        return 0;
      })
    }));
  };

  handleClickPoints = () => {
    this.setState(() => ({
      data: usersJSON.sort((a, b) => {
        return a.points - b.points;
      })
    }));
  };

  handleClickRank = () => {
    this.setState(() => ({
      data: usersJSON.sort((a, b) => {
        return a.rank - b.rank;
      })
    }));
  };

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age onHandleAge={this.handleClickAge}></Age>
          <Name onHandleName={this.handleClickName}></Name>
          <Points onHandlePoints={this.handleClickPoints}></Points>
          <Rank onHandleRank={this.handleClickRank}></Rank>
          <Table data={this.state.data}></Table>
        </div>
      </div>
    );
  }
}
