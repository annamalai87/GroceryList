import React from "react";
import "./App.css";
import ShowGroceries from "./components/ShowGroceries.js";
import NavigationBar from "./components/NavigationBar";
import AddGrocery from "./components/AddGrocery";
import SearchGroceries from "./components/SearchGroceries"

export default class App extends React.Component {
  state = {
    total: 0,
    todos: []
  };
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <SearchGroceries add={this.add}></SearchGroceries>
        <ShowGroceries className="Todo" todos={this.state.todos} flip={this.flip} />
        <AddGrocery add={this.add}></AddGrocery>
      </div>
    );
  }

  add = name => {
    var copy = this.state.todos;
    var current = this.state.total + 1;
    copy.push({
      key: current,
      name: name,
      isCompleted: false
    });
    this.setState({
      total: current,
      todos: copy
    });
  };

  flip = key => {
    this.setState({
      todos: this.state.todos.map(element => {
        if (element.key === key) {
          element.isCompleted = !element.isCompleted;
        }
        return element;
      })
    });
  };
}
