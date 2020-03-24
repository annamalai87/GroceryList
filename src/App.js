import React from "react";
import "./App.css";
import ShowGroceries from "./components/ShowGroceries.js";
import NavigationBar from "./components/NavigationBar";
import AddGroceries from "./components/AddGroceries";
import SelectGroceries from "./components/SelectGroceries";
import { v4 as uuid } from "uuid";

export default class App extends React.Component {
  state = {
    showOnlyYetToBuy: false,
    groceries: []
  };
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <AddGroceries add={this.add}></AddGroceries>
        <SelectGroceries selectYetToBuy={this.selectYetToBuy}></SelectGroceries>
        <ShowGroceries
          state={this.state}
          flip={this.flip}
          delete={this.delete}
        />
      </div>
    );
  }

  add = name => {
    if (name !== null && name !== "") {
      this.setState({
        groceries: [
          {
            key: uuid(),
            name: name,
            isBought: false
          }
        ].concat(this.state.groceries)
      });
    }
  };

  delete = key => {
    this.setState({
      groceries: this.state.groceries.filter(element => element.key !== key)
    });
  };

  selectYetToBuy = boxstate => {
    this.setState({ showOnlyYetToBuy: boxstate, groceries: this.state.groceries });
  };

  flip = key => {
    this.setState({
      groceries: this.state.groceries.map(element => {
        if (element.key === key) {
          element.isBought = !element.isBought;
        }
        return element;
      })
    });
  };
}
