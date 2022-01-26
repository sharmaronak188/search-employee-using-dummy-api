import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      employees: [],
      searchbox: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchbox: e.target.value });
  };

  componentDidMount() {
    fetch("https://hub.dummyapis.com/employee")
      .then((response) => response.json())
      .then((employee) => this.setState({ employees: employee }));
  }

  render() {
    const { employees, searchbox } = this.state;
    const filteredEmployees = employees.filter((employee) =>
      employee.firstName.toLowerCase().includes(searchbox.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="App-title">Employees Rolodex</h1>
        <SearchBox
          placeholder="Search employees using first name"
          handleChange={this.handleChange}
        />
        <CardList employees={filteredEmployees} />
      </div>
    );
  }
}

export default App;
