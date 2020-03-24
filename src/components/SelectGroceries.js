import React, { Component } from "react";

export default class SelectGroceries extends Component {
  handleCheckbox(e) {
    this.props.selectYetToBuy(e.target.checked);
  }

  render() {
    return (
      <div className="search-align">
        <section>
          <div>
            <input
              type="checkbox"
              id="box1"
              name="box1"
              onChange={e => this.handleCheckbox(e)}
            />
            {}{" "}
            <span style={{ fontSize: "85%", color: "brown" }}>
              Show only yet-to-buy items
            </span>
          </div>
        </section>
      </div>
    );
  }
}
