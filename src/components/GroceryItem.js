import React, { Component } from "react";
import img from "../images/delete.png";

export default class GroceryItem extends Component {
  customStyle = isBought => {
    if (isBought) {
      return {
        textDecoration: "line-through",
        marginLeft: "2px"
      };
    } else {
      return {
        textDecoration: "none",
        marginLeft: "2px"
      };
    }
  };

  render() {
    return (
      <div>
        <section>
          <input
            type="checkbox"
            checked={this.props.grocery.isBought}
            className="grocery-item"
            onChange={this.props.flip.bind(
              this.props.grocery,
              this.props.grocery.key
            )}
          />{" "}
          {}
          <label style={this.customStyle(this.props.grocery.isBought)}>
            {this.props.grocery.name}
          </label>
          <img
            src={img}
            alt=""
            height="20"
            width="20"
            style={{ marginTop: "-2px", marginLeft: "0.5rem" }}
            onClick={this.props.delete.bind(
              this.props.grocery,
              this.props.grocery.key
            )}
          ></img>
        </section>
      </div>
    );
  }
}
