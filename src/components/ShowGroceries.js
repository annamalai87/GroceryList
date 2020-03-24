import React from "react";
import GroceryItem from "./GroceryItem";

export default class ShowGroceries extends React.Component {
  render() {
    return (
      <div>
        {this.props.state.groceries.filter(grocery=> !grocery.isBought || !this.props.state.showOnlyYetToBuy).map(grocery => (
          <div key={grocery.key}>
            <GroceryItem grocery={grocery} flip={this.props.flip.bind(grocery, grocery.key)} delete={this.props.delete.bind(grocery,grocery.key)}/>
          </div>
        ))}
      </div>
    );
  }
}
