import React from "react";

import { models } from "./models";

import TerminatorList from "./components/terminatorList/terminatorList.comp";
import SearchBox from "./components/searchBox/searchBox.comp";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      models: models,
      searcField: "",
    };
  }

  onSearchChange = event => {
    this.setState({ searcField: event.target.value });
  };

  render() {
    const filteredModels = this.state.models.filter(model => {
      return model.name
        .toLowerCase()
        .includes(this.state.searcField.toLowerCase());
    });
    return (
      <div className="container text-center">
        <h1>Terminator modellek</h1>

        <SearchBox searchChange={this.onSearchChange} />

        <TerminatorList models={filteredModels} />
      </div>
    );
  }
}

export default App;
