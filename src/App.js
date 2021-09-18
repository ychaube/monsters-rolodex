import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: "",
    };
  }

  componentDidMount() {
    this.fetchMonsters();
  }

  fetchMonsters() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => this.setState({ monsters: data }));
  }

  onSearchMonster = (e) => {
    const value = e.target.value;
    this.setState({ searchText: value });
  };

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <div className="app-title">Monsters Rolodex</div>
        <SearchBox
          placeholder="Type here to search"
          handleChange={this.onSearchMonster}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
