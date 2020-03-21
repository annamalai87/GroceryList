import React from "react";
import GroceryItem from "./GroceryItem";

export default class ShowGroceries extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.filter(todo=>todo.searchable).map(todo => (
          <div key={todo.key}>
            <GroceryItem todo={todo} flip={this.props.flip.bind(todo, todo.key)} />
          </div>
        ))}
      </div>
    );
  }
}
